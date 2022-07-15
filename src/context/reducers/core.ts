import { Reducer } from 'src/context/types/reducer';

export type CoreAction = 'START_QUIZ';

/**
 * The core reducer.
 */
export const coreReducer: Reducer<CoreAction> = {
    'START_QUIZ': (api) => {
        api.setState({
            started: true 
        });
    }
};