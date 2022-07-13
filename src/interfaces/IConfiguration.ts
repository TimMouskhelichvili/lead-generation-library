import { MyTheme } from 'src/theme';

export interface IConfiguration {
	title: string;
	description?: string;
	image?: string;
	
	theme?: MyTheme;
}