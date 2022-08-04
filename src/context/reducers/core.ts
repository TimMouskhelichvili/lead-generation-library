import { getDefaultState } from 'src/utils/defaults';
import { Reducer } from 'src/context/types/reducer';
import { Status } from 'src/context/enums/status';

export type CoreAction = 'START_QUIZ' | 'RETRY' | 'SHOW_ANSWERS' | 'GO_BACK_TO_ANSWERS';

/**
 * The core reducer.
 */
export const coreReducer: Reducer<CoreAction> = {
    'GO_BACK_TO_ANSWERS': (api) => {
        api.setState({
            status: Status.Completed
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
            status: Status.ViewingAnswers
        });
    },
    'START_QUIZ': (api) => {
        api.setState({
            status: Status.Active
        });
    }
};