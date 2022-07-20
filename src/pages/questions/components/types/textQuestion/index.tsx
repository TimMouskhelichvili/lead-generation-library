import React, { ReactElement } from 'react';
import { Container } from 'src/pages/questions/components/container';
import { useStore } from 'src/context';

/**
 * The TextQuestion component.
 */
export const TextQuestion = (): ReactElement => {
    const question = useStore(c => c.question);

    return (
        <Container title={question.title} selected={[]} disabled={false}>
			asd
        </Container>
    );
};