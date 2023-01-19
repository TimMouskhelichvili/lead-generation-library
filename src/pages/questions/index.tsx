import React, { ReactElement } from 'react';
import { QuestionsHeader } from 'src/pages/questions/components/header';
import { QuestionTypes } from 'src/pages/questions/components/types';

/**
 * The Questions component.
 */
export const Questions = (): ReactElement => (
    <>
        <QuestionsHeader />
        <QuestionTypes />
    </>
);