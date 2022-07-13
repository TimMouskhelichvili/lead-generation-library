import { IAnswer } from 'src/interfaces/IAnswer';

export interface IQuestion {
	answers: IAnswer[];
	title: string;
}