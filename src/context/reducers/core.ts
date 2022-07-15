import { Reducer } from 'src/context/types/reducer';

export type CoreAction = 'START_QUIZ' | 'NEXT' | 'PREVIOUS';

/**
 * The core reducer.
 */
export const coreReducer: Reducer<CoreAction> = {
    'NEXT': (api) => {
        const state = api.getState();

        if (state.current + 2 > state.questions.length) {
            return;
        }
		
        api.setState({
            current: state.current + 1
        });
    },
    'PREVIOUS': (api) => {
        const current = api.getState().current;
        if (current - 1 < 0) {
            return;
        }

        api.setState({
            current: current - 1
        });
    },
    'START_QUIZ': (api) => {
        api.setState({
            started: true 
        });
    }
};