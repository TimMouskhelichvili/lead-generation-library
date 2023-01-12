import { IQuestion } from 'src/interfaces/IQuestion';

/**
 * Returns the filtered user questions.
 * @param {IQuestion[]} questions - The questions. 
 */
export const getUserQuestions = (questions: IQuestion[]): IQuestion[] => {
    return questions.filter(x => x.type !== 'text');
};