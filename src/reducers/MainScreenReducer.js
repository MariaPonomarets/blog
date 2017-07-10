/**
 * Created by mponomarets on 6/25/17.
 */
import {CHNAGE_TITLE, SET_ORIENTATION, ON_CALENDAR_CHANGE} from '../actions/types';

const INITIAL_STATE = {
	title: 'Blog',
	blogNewsList: [
		{
			id: 0,
			title: 'The number of protons',
			img: require('../img/1.png'),
			date: 1433106000000,
			views: 343,
			description: 'Apple Inc has decided to launch the much awaited Apple Watch in'
		},
		{
			id: 1,
			title: 'Sport Stadium Birdview ',
			img: require('../img/2.png'),
			date: 1433106000000,
			views: 343,
			description: 'Apple Inc has decided to launch the much awaited Apple Watch in'
		},
		{
			id: 2,
			title: 'The number of protons',
			img: require('../img/3.png'),
			date: 1433106000000,
			views: 343,
			description: 'Apple Inc has decided to launch the much awaited Apple Watch in'
		},
		{
			id: 3,
			title: 'Sport Stadium Birdview ',
			img: require('../img/4.png'),
			date: 1433106000000,
			views: 343,
			description: 'Apple Inc has decided to launch the much awaited Apple Watch in'
		},
		{
			id: 4,
			title: 'The number of protons',
			img: require('../img/5.png'),
			views: 343,
			description: 'Apple Inc has decided to launch the much awaited Apple Watch in'
		}
	],
	calendarData: {
		'mo': [
			{
				'bt': 240,
				'et': 779
			}
		],
		'tu': [],
		'we': [],
		'th': [
			{
				'bt': 240,
				'et': 779
			},
			{
				'bt': 1140,
				'et': 1319
			}
		],
		'fr': [
			{
				'bt': 660,
				'et': 1019
			}
		],
		'sa': [
			{
				'bt': 0,
				'et': 1439
			}
		],
		'su': []
	},
	datePeriod: [
		{
			period: '00:00',
			value: [[0, 59], [60, 119], [120, 179]]
		},
		{
			period: '03:00',
			value: [[180, 239], [240, 299], [300, 359]]
		},
		{
			period: '06:00',
			value: [[360, 419], [420, 479], [480, 539]]
		},
		{
			period: '09:00',
			value: [[540, 599], [600, 659], [660, 719]]
		},
		{
			period: '12:00',
			value: [[720, 779], [780, 839], [840, 899]]
		},
		{
			period: '15:00',
			value: [[900, 959], [960, 1019], [1020, 1079]]
		},
		{
			period: '18:00',
			value: [[1080, 1139], [1140, 1199], [1200, 1259]]
		},
		{
			period: '21:00',
			value: [[1260, 1319], [1320, 1379], [1380, 1439]]
		}
	],
	orientation: 'LANDSCAPE',
	deviceWidth: 0,
	deviceHeight: 0
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CHNAGE_TITLE:
			return {...state, title: action.payload};
		case ON_CALENDAR_CHANGE:
			return {...state, calendarData: action.payload};
		case SET_ORIENTATION:
			return {
				...state,
				orientation: action.orientation,
				deviceWidth: action.deviceWidth,
				deviceHeight: action.deviceHeight
			};
		default:
			return state;
	}
};