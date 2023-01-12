import { IAnswers } from 'src/interfaces/IAnswers';
import { IResults } from 'src/interfaces/IResults';

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