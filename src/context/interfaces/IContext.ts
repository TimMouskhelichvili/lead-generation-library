import { MyLocale } from 'src/locale';

export interface IContext {	
	title: string;
	description?: string;
	image?: string;

	started: boolean;
	locale: MyLocale;
}