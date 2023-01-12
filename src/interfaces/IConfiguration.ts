import { IQuestion } from 'src/interfaces/IQuestion';
import { IAnswers } from 'src/interfaces/IAnswers';
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
	answers?: IAnswers;
	results?: IConfigurationResults;
}

export interface IConfigurationResults {
	description?: string;
	sendResults?: boolean;
	showRetry?: boolean;
	showAnswers?: boolean;
}