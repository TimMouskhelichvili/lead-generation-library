import React, { ReactElement } from 'react';
import { Score } from 'src/pages/results/components/score';
import { useDispatch, useStore } from 'src/context';
import { ResultsContainer, ResultsTitle, ResultsButton, ResultsDescription, ResultsShowAnswers } from './style';

/**
 * The Results component.
 */
export const Results = (): ReactElement => {
    const { description, showRetry, showAnswers } = useStore(c => c.results);
    const answers = useStore(c => c.answers);
    const locale = useStore(c => c.locale);

    const dispatch = useDispatch();

    const title = answers ? 
        locale.resultsTitle : locale.resultsThankYou;

    const handleRetry = (): void => {
        dispatch({ type: 'RETRY' });
    };

    const handleAnswers = (): void => {
        dispatch({ type: 'SHOW_ANSWERS' });
    };

    return (
        <ResultsContainer>
            <ResultsTitle>{title}</ResultsTitle>
            <Score />
            {description && 
				<ResultsDescription dangerouslySetInnerHTML={{ __html: description }} />}
            {showAnswers && 
				<ResultsShowAnswers onClick={handleAnswers}>
				    {locale.showAnswers}
				</ResultsShowAnswers>}
            {showRetry && <ResultsButton type='button' onClick={handleRetry}>
                {locale.retry}
            </ResultsButton>}
        </ResultsContainer>
    );
};