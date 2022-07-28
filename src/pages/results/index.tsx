import React, { ReactElement } from 'react';
import { useStore } from 'src/context';
import { ResultsContainer } from './style';

/**
 * The Results component.
 */
export const Results = (): ReactElement => {
    const results = useStore(c => c.results);

    return (
        <ResultsContainer>
            {JSON.stringify(results)}
        </ResultsContainer>
    );
};