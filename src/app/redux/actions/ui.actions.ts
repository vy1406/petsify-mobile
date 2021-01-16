import { UI_TYPES } from '../types';
import { Dispatch } from 'redux';

export const setSelectedNavBarID = (dispatch: any, payload: any) => {
	dispatch({
		type: UI_TYPES.SET_SELECTED_NAV_ID,
		payload
	});
};
