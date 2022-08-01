import React, { ReactElement } from 'react';
import { useContextUpdates } from 'src/context/updates';
import { Status } from 'src/context/enums/status';
import { Questions } from 'src/pages/questions';
import { Results } from 'src/pages/results';
import { Answers } from 'src/pages/answers';
import { useStore } from 'src/context';
import { Main } from 'src/pages/main';
import { QuizContainer, QuizRow } from './style';

/**
 * The Quiz component.
 */
export const Quiz = (): ReactElement => {
    const status = useStore(c => c.status);

    useContextUpdates();

    const getElementByStatus = (): ReactElement => {
        if ([ Status.Active, Status.Submitting ].includes(status)) {
            return <Questions />;
        } else if (status === Status.Completed) {
            return <Results />;
        } else if (status === Status.ViewingAnswers) {
            return <Answers />;
        }

        return <Main />;
    };

    return (
        <QuizContainer>
            <QuizRow>
                {getElementByStatus()}
            </QuizRow>
        </QuizContainer>
    );
};