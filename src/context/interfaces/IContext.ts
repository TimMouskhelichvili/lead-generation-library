import { IConfiguration } from 'src/interfaces/IConfiguration';
import { IQuestion } from 'src/interfaces/IQuestion';
import { IAnswers } from 'src/interfaces/IAnswers';
import { IResults } from 'src/interfaces/IResults';
import { Status } from 'src/types/enums';
import { MyLocale } from 'src/locale';

export interface IContext {	
	title: string;
	questions: IQuestion[];
	description?: string;
	image?: string;
	result?: string[];

	config: IConfiguration;
	status: Status;
	question: IQuestion;
	locale: MyLocale;
	current: number;
	results: IContextResults;

	isPreviousDisabled?: boolean;
	isNextDisabled?: boolean;
	isLastQuestion?: boolean;
	error?: string;
	answers?: IAnswers;
}

export interface IContextResults {
	items: IResults;
	sendResults: boolean;
	showRetry?: boolean;
	showAnswers?: boolean;
	description?: string;
}