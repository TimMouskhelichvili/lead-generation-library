import { useCallback } from 'react';
import createContext from 'zustand/context';
import { StoreApi } from 'zustand';
import { DispatchParams, InternalDispatch, PublicDispatch } from 'src/context/types/dispatch';
import { PublicEvent, InternalEvent } from 'src/context/types/eventType';
import { callbacksReducer } from 'src/context/reducers/callbacks';
import { publicReducer } from 'src/context/reducers/public';
import { IContext } from 'src/context/interfaces/IContext';
import { quizReducer } from 'src/context/reducers/quiz';
import { coreReducer } from 'src/context/reducers/core';
import { sendEvent } from 'src/context/utils/events';

const storeInternal = {
    ...coreReducer,
    ...quizReducer,
    ...callbacksReducer
};

const storePublic = {
    ...publicReducer
};

export const { 
    Provider, 
    useStore, 
    useStoreApi 
} = createContext<StoreApi<IContext>>();

/**
 * The dispatch hook.
 */
export const useDispatch = (): InternalDispatch => {
    const api = useStoreApi() as StoreApi<IContext>;
	
    return useCallback((p: DispatchParams<InternalEvent>): void => {
        storeInternal[p.type]?.(api, p.value);
        sendEvent(p.type, api);
    }, [ api ]);
};

/**
 * The public dispatch hook.
 */
export const usePublicDispatch = (): PublicDispatch => {
    const api = useStoreApi() as StoreApi<IContext>;
	
    return useCallback((p: DispatchParams<PublicEvent>): void => {
        storePublic[p.type]?.(api, p.value);
    }, [ api ]);
};