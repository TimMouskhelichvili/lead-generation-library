import React, { ReactElement } from 'react';
import { useStore } from 'src/context';
import { IAnswers } from 'src/interfaces/IAnswers';
import { IResults } from 'src/interfaces/IResults';
import { ScoreAnswers, ScoreContent, ScoreTitle, ScoreContainer } from './style';

/**
 * The Score component.
 */
export const Score = (): ReactElement | null => {
    const results = useStore(c => c.results);
    const answers = useStore(c => c.answers);
    const locale = useStore(c => c.locale);

    if (!answers) {
        return null;
    }

    const length = Object.keys(answers).length;
    const correct = getCorrectCount(results, answers);
    const score = `${Math.floor(correct / length * 100)}%`;

    return (
        <div>
            <ScoreContainer>
                <ScoreContent>
                    <ScoreTitle>
                        {score}
                    </ScoreTitle>
                    <ScoreAnswers>
                        {locale.resultsAnswers.replace('{0}', `${correct}/${length}`)}
                    </ScoreAnswers>
                </ScoreContent>
            </ScoreContainer>
        </div>
    );
};

/**
 * Returns the correct answers count.
 * @param {IResults} results - The results. 
 * @param {IAnswers} answers - The answers. 
 */
const getCorrectCount = (results: IResults, answers: IAnswers): number => {
    let cpt = 0;

    for (const i in answers) {
        if (JSON.stringify(results[i]) === JSON.stringify(answers[i])) {
            cpt++;
        }
    }

    return cpt;
};