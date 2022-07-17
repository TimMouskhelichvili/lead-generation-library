import { IQuestion } from 'src/interfaces/IQuestion';
import { MyLocale } from 'src/locale';

export interface IContext {	
	title: string;
	questions: IQuestion[];
	description?: string;
	image?: string;
	started: boolean;
	locale: MyLocale;
	current: number;

	results: { 
		[ key: string ]: string[]; 
	};
}