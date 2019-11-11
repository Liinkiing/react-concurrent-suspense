import {Dispatch, SetStateAction, useEffect, useReducer, useState} from 'react';

type ReducerAction<R> =
    | { type: 'FETCH_INIT' }
    | { type: 'FETCH_SUCCESS', results: R }
    | { type: 'FETCH_ERROR', error: string };

interface ReducerState<D> {
    data?: D;
    isLoading: boolean;
    error?: string;
}

const reducer = <R>() => (state: ReducerState<R>, action: ReducerAction<R>): ReducerState<R> => {
    switch (action.type) {
        case 'FETCH_INIT':
            return {
                ...state,
                isLoading: true
            }
        case 'FETCH_SUCCESS':
            return {
                ...state,
                isLoading: false,
                data: action.results
            }
        case 'FETCH_ERROR':
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        default:
            throw new Error('Unknown action type')
    }
}

const useApi = <R>(resource: string): [ReducerState<R>, Dispatch<SetStateAction<string>>] => {
    const [url, setUrl] = useState<string>(resource);
    const [state, dispatch] = useReducer(reducer<R>(), {isLoading: false})
    useEffect(() => {
        let didCancel = false;
        const fetchData = async () => {
            dispatch({type: 'FETCH_INIT'});
            try {
                const results = await (await fetch(url)).json();
                if (!didCancel) {
                    dispatch({type: 'FETCH_SUCCESS', results});
                }
            } catch (error) {
                if (!didCancel) {
                    dispatch({type: 'FETCH_ERROR', error});
                }
            }
        };
        fetchData()

        return () => {
            didCancel = true
        }
    }, [url])

    return [state, setUrl]
}

export default useApi
