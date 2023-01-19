import { getFilteredQuestions, getQuestionsAnswers } from 'src/utils/questions';
import { IAnswers } from 'src/interfaces/IAnswers';
import { IResults } from 'src/interfaces/IResults';
import { useStore } from 'src/context';

/**
 * Returns the correct answers count.
 * @param {IResults} results - The results. 
 * @param {IAnswers} answers - The answers. 
 */
export const getCorrectCount = (results: IResults, answers: IAnswers): number => {
    let cpt = 0;

    for (const i in answers) {
        let correctAnswers = 0;

        for (const answer of answers[i]) {
            // eslint-disable-next-line max-depth
            if (results[i]?.includes(answer)) {
                correctAnswers++;
            }
        }

        if (correctAnswers === answers[i].length) {
            cpt++;
        }
    }

    return cpt;
};

export interface IScoreResponse {
	total: number;
	correctAnswers: number;
	score: number;
}

/**
 * Returns the score hook.
 */
export const useScore = (): IScoreResponse => {
    const questions = useStore(c => c.questions);
    const { items } = useStore(c => c.results);
    const answers = getQuestionsAnswers(questions);
	
    const total = getFilteredQuestions(questions).length;
    const correctAnswers = getCorrectCount(items, answers);
    const score = Math.floor(correctAnswers / total * 100);

    return {
        correctAnswers,
        score,
        total
    };
};