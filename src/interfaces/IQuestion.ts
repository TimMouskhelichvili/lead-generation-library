import { IAnswer } from 'src/interfaces/IAnswer';

export type QuestionType = 'text';

export interface IQuestion {
	title: string;
	type?: QuestionType;
	
	/**
	 * The maximum number of accepted answers. For multiple choice questions.
	 */
	max?: number;

	/**
	 * The minimum number of accepted answers. For multiple choice questions.
	 */
	min?: number;

	/**
	 * Hides the navigation buttons.
	 */
	hideNavigation?: boolean;
	answers?: IAnswer[];
	placeholder?: string;
}