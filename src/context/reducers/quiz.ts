import { StoreApi } from 'zustand';
import { IContext } from 'src/context/interfaces/IContext';
import { Reducer } from 'src/context/types/reducer';

export type QuizAction = 'NEXT' | 'PREVIOUS' | 'SUBMIT_QUIZ' | 'SUBMIT_ANSWER' | 'UPDATE';

/**
 * The quiz reducer.
 */
export const quizReducer: Reducer<QuizAction> = {
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
    'SUBMIT_ANSWER': (api, value) => {
        submit(api, value);
    },
    'SUBMIT_QUIZ': (api, value) => {
        submit(api, value);
    },
    'UPDATE': (api) => {
        const state = api.getState();
        const isLastQuestion = state.current === state.questions.length - 1;
        const result = getResult(api, state.current);
        const isSubmitting = result && isLastQuestion;
        const status = isSubmitting ? 'SUBMITTING' : state.status;

        api.setState({
            isLastQuestion,
            isNextDisabled: !result || isLastQuestion,
            isPreviousDisabled: !state.current || isSubmitting,
            question: state.questions[state.current],
            result,
            status
        });
    }
};

/**
 * Returns the next.
 * @param {StoreApi<IContext>} api - The api.
 * @param {string} value - The value.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const submit = (api: StoreApi<IContext>, value: any): void => {
    const state = api.getState();

    api.setState({
        current: getNext(api),
        results: {
            ...state.results,
            items: {
                ...state.results.items,
                [state.questions[state.current].id]: value 
            }
        }
    });
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

/**
 * Returns the result from the index.
 * @param {StoreApi<IContext>} api - The api.
 * @param {number} index - The index. 
 */
const getResult = (api: StoreApi<IContext>, index: number): string[] | undefined => {
    const state = api.getState();

    const id = state.questions[index]?.id;

    return state.results.items[id];
};