import { IAnswer } from 'src/interfaces/IAnswer';

export enum QuestionType {
	text = 'text'
}

export enum ValidateType {
	email = 'email'
}

export interface IQuestion {
	
	/**
	 * The title.
	 */
	title: string;

	/**
	 * The id.
	 */
	id: string;

	/**
	 * The type of question. (text).
	 */
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

	/**
	 * Validates the field.
	 */
	validate?: ValidateType;
	
	/**
	 * The answers.
	 */
	answers?: IAnswer[];
	
	/**
	 * The placeholder for the text field.
	 */
	placeholder?: string;

	/**
	 * The description.
	 */
	description?: string;

	/**
	 * The number of answers per row. Default is 1.
	 */
	columns?: number;

}