import { useCallback } from 'react';
import createContext from 'zustand/context';
import { StoreApi } from 'zustand';
import { callbacksReducer } from 'src/context/reducers/callbacks';
import { DispatchParams } from 'src/context/types/dispatch';
import { IContext } from 'src/context/interfaces/IContext';
import { quizReducer } from 'src/context/reducers/quiz';
import { coreReducer } from 'src/context/reducers/core';
import { sendEvent } from 'src/context/utils/events';

const store = {
    ...coreReducer,
    ...quizReducer,
    ...callbacksReducer
};

export const { 
    Provider, 
    useStore, 
    useStoreApi 
} = createContext<StoreApi<IContext>>();

/**
 * The dispatch hook.
 */
export const useDispatch = (): (p: DispatchParams) => void => {
    const api = useStoreApi() as StoreApi<IContext>;
	
    return useCallback((p: DispatchParams): void => {
        store[p.type]?.(api, p.value);
        sendEvent(p.type, api);
    }, [ api ]);
};