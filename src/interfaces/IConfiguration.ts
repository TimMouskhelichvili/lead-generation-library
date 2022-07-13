import { MyLanguage, MyLocale } from 'src/locales';
import { MyTheme } from 'src/theme';

export interface IConfiguration {
	title: string;
	description?: string;
	image?: string;
	
	theme?: MyTheme;
	language?: MyLanguage;
	customLocale: MyLocale;
}