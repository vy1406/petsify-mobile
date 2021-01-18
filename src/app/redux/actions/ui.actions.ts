import { UI_TYPES } from '../types';
import { Dispatch } from 'redux';
import axios from 'axios';
import DataService from '../../services/data.service';

export const setSelectedNavBarID = (dispatch: any, payload: any) => {
	dispatch({
		type: UI_TYPES.SET_SELECTED_NAV_ID,
		payload
	});
};

export const getUser = (userId: number) => {
	return async (dispatch: any) => {
		console.log('here?');
		const ds = new DataService();
		const data = await ds.getUser(userId);
	};
};
