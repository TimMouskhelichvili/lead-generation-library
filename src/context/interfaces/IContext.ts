import { MyLocale } from 'src/locales';

export interface IContext {	
	title: string;
	description?: string;
	image?: string;

	started: boolean;
	locale: MyLocale;
}