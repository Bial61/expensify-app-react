import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import AppRouter from './routers/AppRouter';
import configStore from './redux/store/store'
import {addExpense} from './redux/actions/expenses'
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configStore () ;

const jsx= (
    <Provider store={store}>
       <AppRouter/>
    </Provider>
)
console.log('Git unsatged stages checking')

ReactDOM.render(jsx, document.getElementById('app'));
