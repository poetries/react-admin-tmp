import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import Root from './pages/Root'
import configureStore, { history } from './store/configureStore'
import { loginAfter } from "./actions/loginAfter";
import Immutable from 'immutable';

import './components/elements/GlobalStyles'

window.print = console.log

// const initState = getInitEnvState()
const store = configureStore(Immutable.Map())

// if(process.env.NODE_ENV !== 'production'){
	store.dispatch(loginAfter())
// }
// const history = syncHistoryWithStore(browserHistory,store)
ReactDOM.render(
    <Root store={store} history={history} />,
    document.getElementById('root')
);
