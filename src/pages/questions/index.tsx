import React, { ReactElement } from 'react';
import { Default } from 'src/pages/questions/components/default';
import { useStore } from 'src/context';

/**
 * The Questions component.
 */
export const Questions = (): ReactElement => {
    const questions = useStore(c => c.questions);
    const current = useStore(c => c.current);
    const question = questions[current];

    return <Default question={question} />;
};