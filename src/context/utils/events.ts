import { StoreApi } from 'zustand';
import { IContext } from 'src/context/interfaces/IContext';
import { EventType } from 'src/context/types/eventType';

const ALLOWED_EVENTS: EventType[] = [
    'GO_BACK_TO_ANSWERS',
    'RETRY',
    'SHOW_ANSWERS',
    'START_QUIZ'
];

const ALLOWED_EVENTS_WITH_RESULTS_AND_CURRENT: EventType[] = [
    'NEXT',
    'PREVIOUS',
    'SUBMIT_ANSWER'
];


const ALLOWED_EVENTS_WITH_RESULTS: EventType[] = [
    'SUBMIT_QUIZ',
    'QUIZ_RESULTS_SEND'
];


/**
 * Sends an event.
 * @param {EventType} type - The type. 
 * @param {StoreApi<IContext>} api - The api.
*/
export const sendEvent = (type: EventType, api: StoreApi<IContext>): void => {
    const state = api.getState();

    if (ALLOWED_EVENTS.includes(type)) {
        state.callbacks?.onEvent?.(type);
    }

    if (ALLOWED_EVENTS_WITH_RESULTS_AND_CURRENT.includes(type)) {
        state.callbacks?.onEvent?.(type, {
            current: state.current,
            results: state.results.items
        });
    }

    if (ALLOWED_EVENTS_WITH_RESULTS.includes(type)) {
        state.callbacks?.onEvent?.(type, {
            results: state.results.items
        });
    }
};