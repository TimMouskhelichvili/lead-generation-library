import { ICallbacks } from 'src/interfaces/ICallbacks';
import { IQuestion } from 'src/interfaces/IQuestion';
import { MyLanguage, MyLocale } from 'src/locale';
import { MyTheme } from 'src/theme';

export interface IConfiguration {
	title: string;
	questions: IQuestion[];
	endQuestions?: IQuestion[];
	startQuestions?: IQuestion[];
	description?: string;
	image?: string;
	randomize?: {
		questions: boolean;
		answers: boolean;
	};
	pick?: number;
	theme?: MyTheme;
	language?: MyLanguage;
	customLocale?: MyLocale;
	results?: IConfigurationResults;
	callbacks: ICallbacks;
}

export interface IConfigurationResults {
	showRetry?: boolean;
	showAnswers?: boolean;
	description?: string | ((score: number) => string);
	title?: string | ((score: number) => string);
}