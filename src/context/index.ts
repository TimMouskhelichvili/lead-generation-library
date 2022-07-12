import createContext from 'zustand/context';
import { StoreApi } from 'zustand';
import { DispatchParams } from 'src/context/types/dispatch';
import { IContext } from 'src/context/interfaces/IContext';
import { coreReducer } from 'src/context/reducers/core';

const store = {
    ...coreReducer
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

    return (p: DispatchParams): void => {
        store[p.type]?.(api, p.value);
    };
};