import { combineReducers, Reducer } from 'redux';

import { IAppState } from '../schemas';
import uiReducer from './ui.reducer';
import INITIAL_UI_STATE from '../schemas/ui.schema';

export const rootReducer: Reducer = combineReducers({
	ui: uiReducer
});

export const INITIAL_STORE_STATE: IAppState = {
	ui: INITIAL_UI_STATE
};
