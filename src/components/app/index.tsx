import React from 'react';
import { create, StoreApi } from 'zustand';
import { StyleSheetManager } from 'styled-components';
import { IConfiguration } from 'src/interfaces/IConfiguration';
import { PublicDispatch } from 'src/context/types/dispatch';
import { IContext } from 'src/context/interfaces/IContext';
import { AppWithTheme } from 'src/components/appWithTheme';
import { getDefaultState } from 'src/utils/defaults';
import { Provider } from 'src/context';

interface IProps {
	config: IConfiguration;
	styleSection: HTMLElement;
	setPublicState: (p: PublicDispatch) => void;
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
            <Provider createStore={createStore}>
                <AppWithTheme setPublicState={props.setPublicState} />
            </Provider>
        </StyleSheetManager>
    );
};