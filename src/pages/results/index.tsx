import React, { ReactElement } from 'react';
import { Score } from 'src/pages/results/components/score';
import { useStore } from 'src/context';
import { ResultsContainer, ResultsTitle, ResultsButton } from './style';

/**
 * The Results component.
 */
export const Results = (): ReactElement => {
    const answers = useStore(c => c.answers);
    const locale = useStore(c => c.locale);

    const title = answers ? 
        locale.resultsTitle : locale.resultsThankYou;

    return (
        <ResultsContainer>
            <ResultsTitle>{title}</ResultsTitle>
            <Score />
            <ResultsButton type='button'>
                {locale.retry}
            </ResultsButton>
        </ResultsContainer>
    );
};