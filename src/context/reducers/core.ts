import { Status } from 'src/context/interfaces/IContext';
import { getDefaultState } from 'src/utils/defaults';
import { Reducer } from 'src/context/types/reducer';

export type CoreAction = 'START_QUIZ' | 'RETRY';

/**
 * The core reducer.
 */
export const coreReducer: Reducer<CoreAction> = {
    'RETRY': (api) => {
        const config = api.getState().config;

        api.setState(
            getDefaultState(config)
        );
    },
    'START_QUIZ': (api) => {
        api.setState({
            status: Status.Active
        });
    }
};