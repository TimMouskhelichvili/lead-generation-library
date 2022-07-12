import { CoreAction } from 'src/context/reducers/core';

export type DispatchParams = {
    type: CoreAction;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value?: any;
}

export type Dispatch = (params: DispatchParams) => void;