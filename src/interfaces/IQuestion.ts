import { IAnswer } from 'src/interfaces/IAnswer';

export type QuestionType = 'text';

export interface IQuestion {
	title: string;
	type?: QuestionType;
	
	/**
	 * For multiple answers.
	 */
	max?: number;

	/**
	 * Hides the navigation buttons.
	 */
	hideNavigation?: boolean;
	answers?: IAnswer[];
	placeholder?: string;
}