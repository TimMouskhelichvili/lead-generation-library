import React, { ReactElement, useEffect } from 'react';
import { useDispatch, useStore } from 'src/context';
import styled from 'styled-components';

const Content = styled.div`
	width: 100px;
	height: 100px;
	background: ${(p): string => p.theme.colors.primary}
`;

export const Quiz = (): ReactElement => {
    const dispatch = useDispatch();
    const started = useStore(c => c.started);

    useEffect(() => {
        dispatch({ type: 'INIT' });
    }, []);
	
    return (
        <Content>quiz {String(started)}</Content>
    );
};