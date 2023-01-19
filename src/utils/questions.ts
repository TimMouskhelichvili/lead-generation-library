import { IQuestion } from 'src/interfaces/IQuestion';
import { IAnswers } from 'src/interfaces/IAnswers';

/**
 * Returns the filtered that are counted in the total and shown in the answers screen.
 * @param {IQuestion[]} questions - The questions. 
 */
export const getFilteredQuestions = (questions: IQuestion[]): IQuestion[] => {
    return questions.filter(x => !x.hideFromResults);
};

/**
 * Returns all the questions answers.
 * @param {IQuestion[]} questions - The questions. 
 */
export const getQuestionsAnswers = (questions: IQuestion[]): IAnswers => {
    return questions.reduce((prev, current) => {
        if (current.correctAnswers) {
            prev[current.id] = current.correctAnswers;
        }
        return prev;
    }, {} as IAnswers);
};