import React from 'react';
import create, { StoreApi } from 'zustand';
import { ThemeProvider, StyleSheetManager } from 'styled-components';
import { IConfiguration } from 'src/interfaces/IConfiguration';
import { IContext } from 'src/context/interfaces/IContext';
import { getDefaultState } from 'src/utils/defaults';
import { getDefaultTheme } from 'src/theme';
import { Quiz } from 'src/components/quiz';
import { Provider } from 'src/context';

interface IProps {
	config: IConfiguration;
	styleSection: HTMLElement;
}

/**
 * The App component.
 * @param {IProps} props - The props. 
 */
export const App = (props: IProps): React.ReactElement => {
    const createStore = (): StoreApi<IContext> => {
        return create(() => getDefaultState(props.config));
    };

    return (
        <StyleSheetManager target={props.styleSection}>
            <ThemeProvider theme={getDefaultTheme(props.config.theme)}>
                <Provider createStore={createStore}>
                    <Quiz />
                </Provider>
            </ThemeProvider>
        </StyleSheetManager>
    );
};