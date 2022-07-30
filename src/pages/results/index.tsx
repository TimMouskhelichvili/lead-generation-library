import React, { ReactElement } from 'react';
import { Score } from 'src/pages/results/components/score';
import { useDispatch, useStore } from 'src/context';
import { ResultsContainer, ResultsTitle, ResultsButton } from './style';

/**
 * The Results component.
 */
export const Results = (): ReactElement => {
    const showRetry = useStore(c => c.showRetry);
    const answers = useStore(c => c.answers);
    const locale = useStore(c => c.locale);

    const dispatch = useDispatch();

    const title = answers ? 
        locale.resultsTitle : locale.resultsThankYou;

    const handleRetry = (): void => {
        dispatch({ type: 'RETRY' });
    };

    return (
        <ResultsContainer>
            <ResultsTitle>{title}</ResultsTitle>
            <Score />
            {showRetry && <ResultsButton type='button' onClick={handleRetry}>
                {locale.retry}
            </ResultsButton>}
        </ResultsContainer>
    );
};