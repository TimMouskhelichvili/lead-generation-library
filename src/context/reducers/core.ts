import { StoreApi } from 'zustand';
import { IContext, Status } from 'src/context/interfaces/IContext';
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
            status: Status.Active
        });
    },
    'SUBMIT': (api, value) => {
        const state = api.getState();

        const newState: Partial<IContext> = {
            results: {
                [state.current]: value, 
                ...state.results 
            }
        };

        if (state.current + 2 > state.questions.length) {
            newState.status = Status.Completed;
        } else {
            newState.current = state.current + 1;
        }

        api.setState(newState);
    },
    'UPDATE_QUIZ': (api) => {
        const state = api.getState();
        const next = getNext(api);
        const isLastQuestion = state.current === state.questions.length - 1;

        api.setState({
            isLastQuestion,
            isNextDisabled: !state.results[next] || isLastQuestion,
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