import React, { ReactElement, useEffect } from 'react';
import { useDispatch } from 'src/context';
import { Main } from 'src/pages/main';
import styled from 'styled-components';

const Content = styled.div`
	width: 100%;
	height: 100%;
	background: ${(p): string => p.theme.colors.primary}
`;

export const Quiz = (): ReactElement => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'INIT' });
    }, []);
	
    return (
        <Content>
            <Main />
        </Content>
    );
};