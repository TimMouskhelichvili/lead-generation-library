import { Reducer } from 'src/context/types/reducer';
import { Status } from 'src/context/enums/status';
import { sendResults } from 'src/apis';

export type ApiAction = 'SEND';

/**
 * The api reducer.
 */
export const apiReducer: Reducer<ApiAction> = {
    'SEND': async (api) => {
        const state = api.getState();
        let error = false;

        api.setState({ error: '' });
	
        if (!state.results.sendResults) {
            api.setState({ status: Status.Completed });
            return;
        }

        try {
            await sendResults(state.results.items);
        } catch {
            error = true;
        }
	
        api.setState({
            error: error ? state.locale.errorSubmitting : '',
            status: error ? Status.Active : Status.Completed
        });
    }
};