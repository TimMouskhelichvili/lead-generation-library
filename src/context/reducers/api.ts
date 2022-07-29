import { Status } from 'src/context/interfaces/IContext';
import { Reducer } from 'src/context/types/reducer';
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

        try {
            await sendResults(state.results);
        } catch {
            error = true;
        }
	
        api.setState({
            error: error ? 'An error happened, please retry...' : '',
            status: error ? Status.Active : Status.Completed
        });
    }
};