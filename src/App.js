import React from 'react';
import Todos from "./components/todos/Todos";
import Store from './redux/Store';
import {Provider} from "react-redux";


const App = () => {
    return (
        <Provider store={Store}>
            <Todos />
        </Provider>
    );
};

export default App;