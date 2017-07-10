/**
 * Created by mponomarets on 7/10/17.
 */
import {ON_CALENDAR_CHANGE} from './types';

export const onCalandarElemenetChange = (obj) => {
	let newData = new Object.assign({}, obj);
	return dispatch => dispatch({type: ON_CALENDAR_CHANGE, payload: newData});
};
