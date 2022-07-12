import ReactDOM from 'react-dom';
import React from 'react';
import create, { StoreApi } from 'zustand';
import { getDefaultState } from 'src/context/utils/defaults';
import { IContext } from 'src/context/interfaces/IContext';
import { Provider } from 'src/context';
import { Front } from 'src/components';

const App = (): React.ReactElement => {
    const createStore = (): StoreApi<IContext> => {
        return create(() => getDefaultState());
    };

    return (
        <Provider createStore={createStore}>
            <Front />
        </Provider>
    );
};

ReactDOM.render(<App />, document.getElementById('quiz'));