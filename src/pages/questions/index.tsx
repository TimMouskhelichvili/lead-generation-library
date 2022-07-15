import React, { ReactElement } from 'react';
import { useStore } from 'src/context';

/**
 * The Questions component.
 */
export const Questions = (): ReactElement => {
    const questions = useStore(c => c.questions);
    const current = useStore(c => c.current);

    console.log(questions[current]);
    return <div>questions</div>;
};