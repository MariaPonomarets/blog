/**
 * Created by mponomarets on 7/10/17.
 */
import React, {Component} from 'react';
import {
	View,
	Text,
	TouchableOpacity
} from 'react-native';

class HoursColumn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			calendarData: this.props.calendarData,
			datePeriod: this.props.datePeriod
		};
	}

	componentWillReceiveProps(newProps) {
		this.setState({
			calendarData: newProps.calendarData
		});
	}

	renderDayColumn() {
		const {calendarData} = this.state;
		return Object.keys(calendarData).map((day, index) => {
			return (
				<View
					key={index}
					style={styles.columnContainer}>
					{this.renderDayPeriods(day)}
				</View>
			);
		});
	}

	onOneHourPress(day, time) {
		this.props.selectOneHour(day, time);
	}

	renderDayPeriods(day) {
		const {datePeriod} = this.state;
		return datePeriod.map((period, index) => {
			return (
				<View key={index}>
					{this.renderHours(period, day)}
				</View>);
		});
	}

	renderHours(time, day) {
		const {calendarData} = this.state;
		const {hourContainer, active} = styles;
		return time.value.map((hour, index) => {
			let styleItem = hourContainer;
			if (calendarData[day].length > 0) {
				for (let i = 0; i < calendarData[day].length; i++) {
					if (hour[0] >= calendarData[day][i].bt && hour[1] <= calendarData[day][i].et) {
						styleItem = [hourContainer, active];
					}
				}
			}
			return (
				<TouchableOpacity
					onPress={() => this.onOneHourPress(day, hour)}
					style={styleItem}
					key={index}><Text/>
				</TouchableOpacity>
			);
		});
	}

	render() {
		const {container} = styles;
		return (
			<View style={container}>{this.renderDayColumn()}</View>
		);
	}
}
const colors = {
	bgColor: 'rgb(148,148,148)',
	borderColor: 'rgb(169,169,169)'
};
const styles = {
	container: {
		flex: 1 - 1 / 8,
		flexDirection: 'row'
	},
	columnContainer: {
		flex: (1 - 1 / 8) / 8,
		flexDirection: 'column',
		borderRightWidth: 1,
		borderRightColor: colors.borderColor
	},
	hourContainer: {
		flex: 1,
		height: 20,
		borderBottomWidth: 1,
		borderBottomColor: colors.borderColor
	},
	active: {
		backgroundColor: colors.bgColor
	}
};
export {HoursColumn};