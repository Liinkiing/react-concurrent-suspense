// Taken from https://github.com/relayjs/relay-examples/blob/master/issue-tracker/src/JSResource.js
// It handles fetching of a "resource" (can be anything that will fetch some data asynchronously at any given time)
// It can be lazy loaded code from Webpack
// e.g import('MyResource.js')
// (this is why we check if result.default is defined, that's what Webpack lazy import returns)

// A ResourceMap is created to keep a dictionnary of previously stored resources.

const resourceMap = new Map<string, Resource>()

/**
 * A generic resource: given some method to asynchronously load a value - the loader()
 * argument - it allows accessing the state of the resource.
 */
class Resource {

  private _error: Error | null
  private _loader: () => Promise<any>
  private _promise: Promise<any> | null
  private _result: any | null

  constructor(loader: () => Promise<any>) {
    this._error = null
    this._loader = loader
    this._promise = null
    this._result = null
  }

  private load(): Promise<any> {
    let promise = this._promise
    if (promise == null) {
      promise = this._loader()
        .then(result => {
          if (result.default) {
            result = result.default
          }
          this._result = result
          return result
        })
        .catch(error => {
          this._error = error
          throw error
        })
      this._promise = promise
    }
    return promise
  }

  public get() {
    if (this._result != null) {
      return this._result
    }
  }

  /**
   * This is the key method for integrating with React Suspense. Read will:
   * - "Suspend" if the resource is still pending (currently implemented as
   *   throwing a Promise, though this is subject to change in future
   *   versions of React)
   * - Throw an error if the resource failed to load.
   * - Return the data of the resource if available.
   */
  public read(throwOnError: boolean = false) {
    if (!this._promise) {
      this._promise = this.load()
    }
    if (this._result != null) {
      return this._result
    } else if (this._error != null) {
      if (throwOnError) {
        throw this._error
      }
      return this._error
    } else {
      throw this._promise
    }
  }
}

/**
 * A helper method to create a resource, intended for dynamically loading code.
 *
 * Example:
 * ```
 *    // Before rendering, ie in an event handler:
 *    const resource = JSResource('Foo', () => import('./Foo.js))
 *    resource.load()
 *
 *    // in a React component:
 *    const Foo = resource.read()
 *    return <Foo ... />
 * ```
 *
 */
export default function JSResource(moduleId: string, loader: () => Promise<any>): Resource {
  let resource = resourceMap.get(moduleId)
  if (resource == null) {
    resource = new Resource(loader)
    resourceMap.set(moduleId, resource)
  }
  return resource
}
