import styled from 'styled-components';
import { IStyles } from 'src/interfaces/IStyles';

export const QuizContainer = styled.div<{ styles: IStyles }>`
	width: 100%;
	height: 100%;
	overflow-x: auto;
	font-size: 16px;
	font-family: -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto,Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif;
    font-weight: 400;
	letter-spacing: 0px;
	color: ${(p): string => p.theme.colors.color};
	background: ${(p): string => p.theme.colors.background};

	* {
		box-sizing: border-box;
	}

	${(p): string => {
        let r = '';

        if (p.styles.height) {
            r += `height:${p.styles.height};`;
        }

        if (p.styles.alignCenter) {
            r += 'display: grid;';
        }


        return r;
    }}
`;

export const QuizRow = styled.div`
	margin: auto;
	padding: 1em;
	max-width: 800px;
	width: 100%;
`;