import { IAnswer } from 'src/interfaces/IAnswer';

export type QuestionType = 'text';

export interface IQuestion {
	answers: IAnswer[];
	title: string;
	type?: QuestionType;
	max?: number;
}