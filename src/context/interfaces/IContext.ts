import { IConfiguration } from 'src/interfaces/IConfiguration';
import { ICallbacks } from 'src/interfaces/ICallbacks';
import { IQuestion } from 'src/interfaces/IQuestion';
import { IResults } from 'src/interfaces/IResults';
import { IStyles } from 'src/interfaces/IStyles';
import { Status } from 'src/types/enums';
import { MyLocale } from 'src/locale';
import { MyTheme } from 'src/theme';

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

	callbacks: ICallbacks;
	styles: IStyles;
	theme: MyTheme;
}

export interface IContextResults {
	items: IResults;
	showRetry?: boolean;
	showAnswers?: boolean;
	description?: string | ((score: number) => string);
	title?: string | ((score: number) => string);
}