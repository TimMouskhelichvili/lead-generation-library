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
        if (JSON.stringify(results[i]) === JSON.stringify(answers[i])) {
            cpt++;
        }
    }

    return cpt;
};