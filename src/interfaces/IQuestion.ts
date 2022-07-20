import { IAnswer } from 'src/interfaces/IAnswer';

export type QuestionType = 'text';

export interface IQuestion {
	title: string;
	type?: QuestionType;
	max?: number;
	answers?: IAnswer[];
}