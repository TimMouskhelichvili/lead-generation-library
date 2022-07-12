import { Reducer } from 'src/context/types/reducer';

export type CoreAction = 'INIT';

/**
 * The core reducer.
 */
export const coreReducer: Reducer<CoreAction> = {
    'INIT': (api) => {
        api.setState({ 
            started: true 
        });
    }
};