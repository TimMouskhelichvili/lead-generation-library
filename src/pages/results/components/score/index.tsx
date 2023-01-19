import React, { ReactElement } from 'react';
import { useScore } from 'src/pages/results/utils';
import { useStore } from 'src/context';
import { ScoreAnswers, ScoreContent, ScoreTitle, ScoreContainer } from './style';

/**
 * The Score component.
 */
export const Score = (): ReactElement | null => {
    const locale = useStore(c => c.locale);
    const { correctAnswers, score, total } = useScore();

    const title = length > 1 ? 
        locale.resultsAnswers : locale.resultsAnswer;

    return (
        <div>
            <ScoreContainer>
                <ScoreContent>
                    <ScoreTitle>
                        {`${score}%`}
                    </ScoreTitle>
                    <ScoreAnswers>
                        {title.replace('{0}', `${correctAnswers}/${total}`)}
                    </ScoreAnswers>
                </ScoreContent>
            </ScoreContainer>
        </div>
    );
};