import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux'
import todoApp from './reducers';
import App from './components/App';

let store = createStore(todoApp);

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

/**
 * 源码地址：
 * https://github.com/chenjun1127/react-redux-todolist，接入了sass进行美化
 * http://www.redux.org.cn/docs/basics/ExampleTodoList.html
 */