import INITIAL_UI_STATE, { IUiState } from '../schemas/ui.schema';
import { UI_TYPES } from '../types';

const uiReducer = (lastState: IUiState = INITIAL_UI_STATE, action: any) => {
	if (lastState === undefined) {
		return INITIAL_UI_STATE;
	}

	switch (action.type) {
		case UI_TYPES.SET_SELECTED_NAV_ID:
			return {
				...lastState,
				selectedNavId: action.payload
			};

		default:
			return lastState;
	}
};

export default uiReducer;
