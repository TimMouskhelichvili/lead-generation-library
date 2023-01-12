import React, { ReactElement } from 'react';
import { getCorrectCount } from 'src/pages/results/utils';
import { getUserQuestions } from 'src/utils/questions';
import { useStore } from 'src/context';
import { ScoreAnswers, ScoreContent, ScoreTitle, ScoreContainer } from './style';

/**
 * The Score component.
 */
export const Score = (): ReactElement | null => {
    const questions = useStore(c => c.questions);
    const { items } = useStore(c => c.results);
    const answers = useStore(c => c.answers);
    const locale = useStore(c => c.locale);

    if (!answers) {
        return null;
    }

    const length = getUserQuestions(questions).length;
    const correct = getCorrectCount(items, answers);
    const score = `${Math.floor(correct / length * 100)}%`;

    const title = length > 1 ? 
        locale.resultsAnswers : locale.resultsAnswer;

    return (
        <div>
            <ScoreContainer>
                <ScoreContent>
                    <ScoreTitle>
                        {score}
                    </ScoreTitle>
                    <ScoreAnswers>
                        {title.replace('{0}', `${correct}/${length}`)}
                    </ScoreAnswers>
                </ScoreContent>
            </ScoreContainer>
        </div>
    );
};