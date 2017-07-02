/**
 * Created by mponomarets on 7/2/17.
 */
import {CHNAGE_TITLE, SET_ORIENTATION} from './types';

export const changePageTitle = (title) => {
	return dispatch => {
		dispatch({
			type: CHNAGE_TITLE,
			payload: title
		});
	};
};

export const appLayout = (event) => {
	const { width, height } = event.nativeEvent.layout;
	const orientation = (width > height) ? 'LANDSCAPE' : 'PORTRAIT';
	return dispatch=>dispatch({
		type: SET_ORIENTATION,
		orientation: orientation,
		deviceHeight: height,
		deviceWidth: width
	});
};


