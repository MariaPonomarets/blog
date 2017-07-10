/**
 * Created by mponomarets on 7/10/17.
 */
import React, {Component} from 'react';
import {
	View,
	Text
} from 'react-native';
class DaysNameRow extends Component {
	constructor(props) {
		super(props);
		this.state = {
			calendarData: this.props.calendarData,
			days: ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU']
		};
	}

	componentWillReceiveProps(newProps) {
		this.setState({
			calendarData: newProps.calendarData
		});
	}

	renderDaysRow() {
		const {calendarData, days} = this.state;
		const {elemContainer, activeDayStyle, dayStyle} = styles;

		return Object.keys(calendarData).map((day, index) => {
			const dayStyles = calendarData[day.toLowerCase()][0] ? [elemContainer, activeDayStyle] : [elemContainer, dayStyle];
			return (
				<View style={dayStyles} key={index}>
					<Text>{days[index]}</Text>
				</View>
			);
		});

	}

	render() {
		const {container, dayStyle, elemContainer} = styles;
		return (
			<View style={container}>
				<View style={[elemContainer, dayStyle]}>
					<Text/>
				</View>
				{this.renderDaysRow()}
			</View>
		);
	}
}
const colors = {
	activeColor: 'rgb(148,148,148)',
	activeDayColor: 'rgb(169,169,169)',
	transparent: 'transparent'
};

const styles = {
	container: {
		flexDirection: 'row',
		alignItems: 'stretch',
		justifyContent: 'center',
		borderBottomColor: 'grey',
		borderBottomWidth: 1
	},
	elemContainer: {
		flex: 1/8,
		alignItems: 'center',
		justifyContent: 'center'
	},
	dayStyle: {
		height: 40
	},
	activeDayStyle: {
		backgroundColor: colors.activeDayColor,
		height: 40
	}
};


export {DaysNameRow};