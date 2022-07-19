import { StoreApi } from 'zustand';
import { IContext } from 'src/context/interfaces/IContext';
import { Reducer } from 'src/context/types/reducer';

export type CoreAction = 'START_QUIZ' | 'NEXT' | 'PREVIOUS' | 'SUBMIT' | 'UPDATE_QUIZ';

/**
 * The core reducer.
 */
export const coreReducer: Reducer<CoreAction> = {
    'NEXT': (api) => {
        api.setState({
            current: getNext(api)
        });
    },
    'PREVIOUS': (api) => {
        api.setState({
            current: api.getState().current - 1
        });
    },
    'START_QUIZ': (api) => {
        api.setState({
            started: true 
        });
    },
    'SUBMIT': (api, value) => {
        const state = api.getState();

        api.setState({
            results: {
                [state.current]: value, 
                ...state.results 
            }
        });

        if (state.current + 2 > state.questions.length) {
            return;
        }
		
        api.setState({
            current: state.current + 1
        });
    },
    'UPDATE_QUIZ': (api) => {
        const state = api.getState();
        const next = getNext(api);

        api.setState({
            isNextDisabled: !state.results[next] || state.current === state.questions.length - 1,
            isPreviousDisabled: !state.current,
            question: state.questions[state.current],
            result: state.results[state.current]
        });
    }
};

/**
 * Returns the next.
 * @param {StoreApi<IContext>} api - The api.
 */
const getNext = (api: StoreApi<IContext>): number => {
    const current = api.getState().current;

    if (current < api.getState().questions.length - 1) {
        return current + 1;
    }

    return current;
};