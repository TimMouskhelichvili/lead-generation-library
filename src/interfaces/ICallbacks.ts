import { EventType } from 'src/context/types/eventType';
import { IResults } from 'src/interfaces/IResults';

export interface ICallbacks {
	onSend?: (items: IResults) => Promise<unknown>;
	onEvent?: (type: EventType, data?: IClickData) => void;
	onError?: (error: unknown) => void;
}

export interface IClickData {
	current?: number;
	results: IResults;
}