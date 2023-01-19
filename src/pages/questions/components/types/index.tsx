import React, { ReactElement } from 'react';
import { DefaultQuestion } from 'src/pages/questions/components/types/defaultQuestion';
import { TextQuestion } from 'src/pages/questions/components/types/textQuestion';
import { useStore } from 'src/context';

/**
 * The QuestionTypes component.
 */
export const QuestionTypes = (): ReactElement => {
    const question = useStore(c => c.question);

    if (question.type === 'text') {
        return <TextQuestion />;
    }

    return <DefaultQuestion />;
};