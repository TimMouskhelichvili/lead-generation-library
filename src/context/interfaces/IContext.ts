import { IQuestion } from 'src/interfaces/IQuestion';
import { MyLocale } from 'src/locale';

export enum Status {
	NotStarted,
	Active, 
	Completed
}

export interface IContext {	
	title: string;
	questions: IQuestion[];
	description?: string;
	image?: string;
	result?: string[];

	status: Status,
	question: IQuestion;
	locale: MyLocale;
	current: number;
	results: { 
		[ key: string ]: string[]; 
	};

	isPreviousDisabled?: boolean;
	isNextDisabled?: boolean;
	isLastQuestion?: boolean;
}