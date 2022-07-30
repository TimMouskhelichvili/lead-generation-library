import React, { ReactElement } from 'react';
import { IAnswers } from 'src/interfaces/IAnswers';
import { IResults } from 'src/interfaces/IResults';
import { useStore } from 'src/context';
import { ResultsScore, ScoreContainer } from './style';

/**
 * The Score component.
 */
export const Score = (): ReactElement | null => {
    const results = useStore(c => c.results);
    const answers = useStore(c => c.answers);

    if (!answers) {
        return null;
    }

    return (
        <ScoreContainer>
            {getScore(results, answers)}
        </ScoreContainer>
    );
};

/**
 * Returns the score.
 * @param {IResults} results - The results. 
 * @param {IAnswers} answers - The answers. 
 */
const getScore = (results: IResults, answers: IAnswers): ReactElement => {
    const length = Object.keys(answers).length;
    let cpt = 0;

    for (const i in answers) {
        if (JSON.stringify(results[i]) === JSON.stringify(answers[i])) {
            cpt++;
        }
    }

    const score = `${Math.floor(cpt / length * 100)}%`;

    return (
        <>
            <ResultsScore>
                <span>{score}</span>
            </ResultsScore>
            <div></div>
        </>
    );
};