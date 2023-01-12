import { IQuestion } from 'src/interfaces/IQuestion';

/**
 * Returns the filtered that are counted in the total and shown in the answers screen.
 * @param {IQuestion[]} questions - The questions. 
 */
export const getFilteredQuestions = (questions: IQuestion[]): IQuestion[] => {
    return questions.filter(x => !x.hideFromResults);
};