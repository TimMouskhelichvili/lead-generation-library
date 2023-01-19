import { EventType } from 'src/context/types/eventType';

export type DispatchParams = {
    type: EventType;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value?: any;
}

export type Dispatch = (params: DispatchParams) => void;