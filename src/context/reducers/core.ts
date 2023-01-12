import { getDefaultState } from 'src/utils/defaults';
import { Reducer } from 'src/context/types/reducer';

export type CoreAction = 'START_QUIZ' | 'RETRY' | 'SHOW_ANSWERS' | 'GO_BACK_TO_ANSWERS';

/**
 * The core reducer.
 */
export const coreReducer: Reducer<CoreAction> = {
    'GO_BACK_TO_ANSWERS': (api) => {
        api.setState({
            status: 'COMPLETED'
        });
    },
    'RETRY': (api) => {
        const config = api.getState().config;

        api.setState(
            getDefaultState(config)
        );
    },
    'SHOW_ANSWERS': (api) => {
        api.setState({
            status: 'VIEWING_ANSWERS'
        });
    },
    'START_QUIZ': (api) => {
        api.setState({
            status: 'ACTIVE'
        });
    }
};