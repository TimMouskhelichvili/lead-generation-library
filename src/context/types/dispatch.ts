import { InternalEvent, PublicEvent } from 'src/context/types/eventType';

export type DispatchParams<T> = {
    type: T;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value?: any;
}

export type Dispatch = <T>(params: DispatchParams<T>) => void;

export type PublicDispatch = (p: DispatchParams<PublicEvent>) => void;

export type InternalDispatch = (p: DispatchParams<InternalEvent>) => void;