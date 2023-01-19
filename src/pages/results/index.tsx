import React, { ReactElement } from 'react';
import { ShowAnswers } from 'src/pages/results/components/showAnswers';
import { Score } from 'src/pages/results/components/score';
import { getQuestionsAnswers } from 'src/utils/questions';
import { useDispatch, useStore } from 'src/context';
import { useScore } from 'src/pages/results/utils';
import { ResultsContainer, ResultsTitle, ResultsButton, ResultsDescription } from './style';

/**
 * The Results component.
 */
export const Results = (): ReactElement => {
    const { showRetry } = useStore(c => c.results);
    const locale = useStore(c => c.locale);

    const title = useTitle();
    const description = useDescription();
    const dispatch = useDispatch();

    const handleRetry = (): void => {
        dispatch({ type: 'RETRY' });
    };

    return (
        <ResultsContainer>
            <ResultsTitle>{title}</ResultsTitle>
            <Score />
            {description && 
				<ResultsDescription dangerouslySetInnerHTML={{ __html: description }} />}
            <ShowAnswers />
            {showRetry && <ResultsButton type='button' onClick={handleRetry}>
                {locale.retry}
            </ResultsButton>}
        </ResultsContainer>
    );
};

/**
 * Returns the description.
 */
const useDescription = (): string => {
    const { description } = useStore(c => c.results);
    const { score } = useScore();

    if (!description) {
        return '';
    }

    return typeof description === 'function' ? description(score) : description;
};

/**
 * Returns the title.
 */
const useTitle = (): string => {
    const locale = useStore(c => c.locale);
    const { title } = useStore(c => c.results);
    const questions = useStore(c => c.questions);
    const { score } = useScore();

    const answers = getQuestionsAnswers(questions);

    if (!title) {
        return answers ? locale.resultsTitle : locale.resultsThankYou;
    }

    return typeof title === 'function' ? title(score) : title;
};