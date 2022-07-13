import { MyLanguage, MyLocale } from 'src/locale';
import { MyTheme } from 'src/theme';
import { IQuestion } from 'src/interfaces/IQuestion';

export interface IConfiguration {
	title: string;
	questions: IQuestion[];
	description?: string;
	image?: string;
	
	theme?: MyTheme;
	language?: MyLanguage;
	customLocale: MyLocale;
}