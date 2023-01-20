import { sendEvent } from 'src/context/utils/events';
import { Reducer } from 'src/context/types/reducer';

export type ApiAction = 'BEFORE_SUBMIT';

/**
 * The callbacks reducer.
 */
export const callbacksReducer: Reducer<ApiAction> = {
    'BEFORE_SUBMIT': async (api) => {
        const state = api.getState();
        let error = false;

        api.setState({ error: '' });
	
        if (!state.callbacks.onSend) {
            api.setState({ status: 'COMPLETED' });
            return;
        }

        try {
            const result = await state.callbacks.onSend(state.results.items);
            if (result) {
                sendEvent('QUIZ_RESULTS_SEND', api);
            }
        } catch (e) {
            state.callbacks.onError?.(e);
            error = true;
        }
	
        api.setState({
            error: error ? state.locale.errorSubmitting : '',
            status: error ? 'ACTIVE' : 'COMPLETED'
        });
    }
};