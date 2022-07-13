import React, { ReactElement, useEffect } from 'react';
import { useDispatch } from 'src/context';
import { Main } from 'src/pages/main';
import styled from 'styled-components';

const Content = styled.div`
	width: 100%;
	height: 100%;
	font-size: 16px;
	font-family: -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto,Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif;
    font-weight: 400;
	letter-spacing: 0px;
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