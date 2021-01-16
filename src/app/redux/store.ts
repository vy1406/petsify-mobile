import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from './reducers';

const store = createStore(rootReducer, undefined, composeWithDevTools());

export default store;
