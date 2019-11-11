import * as React from 'react'

interface State {
    error: Error | null
}

export class ErrorBoundary extends React.Component<{}, State> {
    state: Readonly<State> = {
        error: null
    }

    static getDerivedStateFromError(error: Error) {
        return {error}
    }

    tryAgain = () => this.setState({
        error: null
    })

    render() {
        const { error } = this.state
        return error ? (
            <div>
                There was an error. <button onClick={this.tryAgain}>try again</button>
                <pre style={{whiteSpace: 'normal'}}>{error.message}</pre>
            </div>
        ) : (
            this.props.children
        )
    }
}
