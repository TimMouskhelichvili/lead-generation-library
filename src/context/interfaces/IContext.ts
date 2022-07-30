import { IQuestion } from 'src/interfaces/IQuestion';
import { IAnswers } from 'src/interfaces/IAnswers';
import { IResults } from 'src/interfaces/IResults';
import { MyLocale } from 'src/locale';

export enum Status {
	NotStarted,
	Active, 
	Completed,
	Submitting
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
	results: IResults;
	sendResults: boolean;

	isPreviousDisabled?: boolean;
	isNextDisabled?: boolean;
	isLastQuestion?: boolean;
	error?: string;
	answers?: IAnswers;
}