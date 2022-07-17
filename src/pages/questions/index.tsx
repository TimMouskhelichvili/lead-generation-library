import React, { ReactElement } from 'react';
import { Default } from 'src/pages/questions/components/default';
import { useStore } from 'src/context';

/**
 * The Questions component.
 */
export const Questions = (): ReactElement => {
    const questions = useStore(c => c.questions);
    const results = useStore(c => c.results);
    const current = useStore(c => c.current);

    const question = questions[current];
    const result = results[current];

    return <Default question={question} result={result} />;
};