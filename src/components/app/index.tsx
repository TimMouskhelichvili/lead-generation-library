import React from 'react';
import create, { StoreApi } from 'zustand';
import { getDefaultState } from 'src/context/utils/defaults';
import { IConfiguration } from 'src/interfaces/IConfiguration';
import { IContext } from 'src/context/interfaces/IContext';
import { Quiz } from 'src/components/quiz';
import { Provider } from 'src/context';

interface IProps {
	config: IConfiguration;
}

export const App = (props: IProps): React.ReactElement => {
    const createStore = (): StoreApi<IContext> => {
        return create(() => getDefaultState(props.config));
    };

    return (
        <Provider createStore={createStore}>
            <Quiz />
        </Provider>
    );
};