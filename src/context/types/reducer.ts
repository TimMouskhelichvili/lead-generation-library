import { StoreApi } from 'zustand';
import { IContext } from 'src/context/interfaces/IContext';

export type Reducer<T extends string> = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key in T]: (api: StoreApi<IContext>, value?: any) => void;
}