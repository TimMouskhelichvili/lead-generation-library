import React, { ReactElement } from 'react';
import { getCorrectCount } from 'src/pages/results/utils';
import { useDispatch, useStore } from 'src/context';
import { ResultsShowAnswers } from './style';

/**
 * The ShowAnswers component.
 */
export const ShowAnswers = (): ReactElement | null => {
    const { showAnswers } = useStore(c => c.results);
    const { items } = useStore(c => c.results);
    const answers = useStore(c => c.answers);
    const locale = useStore(c => c.locale);

    const dispatch = useDispatch();

    if (!showAnswers || !answers) {
        return null;
    }
	
    const length = Object.keys(answers).length;
    const correct = getCorrectCount(items, answers);

    if (length === correct) {
        return null;
    }

    const handleAnswers = (): void => {
        dispatch({ type: 'SHOW_ANSWERS' });
    };

    return (
        <ResultsShowAnswers>
            <span onClick={handleAnswers}>
                {locale.showAnswers}
            </span>
        </ResultsShowAnswers>
    );
};