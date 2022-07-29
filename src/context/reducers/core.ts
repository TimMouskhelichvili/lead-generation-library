import { Status } from 'src/context/interfaces/IContext';
import { Reducer } from 'src/context/types/reducer';

export type CoreAction = 'START_QUIZ'

/**
 * The core reducer.
 */
export const coreReducer: Reducer<CoreAction> = {
    'START_QUIZ': (api) => {
        api.setState({
            status: Status.Active
        });
    }
};