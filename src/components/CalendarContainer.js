/**
 * Created by mponomarets on 7/2/17.
 */
/**
 * Created by mponomarets on 7/1/17.
 */
import React, {Component} from 'react';
import {
	View,
	ScrollView,
	TouchableOpacity,
	Text,
	Alert,
	Platform
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {onCalandarElemenetChange} from '../actions';
import {DaysNameRow, ButtonsRow, TimeNameColumn, HoursColumn, BackHeader} from './common';
import {connect} from 'react-redux';

class CalendarContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			calendarData: this.props.calendarData,
			datePeriod: this.props.datePeriod
		};
		this.selectAllDayTime = this.selectAllDayTime.bind(this);
		this.selectOneHour = this.selectOneHour.bind(this);
	}

	componentWillReceiveProps(newProps) {
		this.setState({
			calendarData: newProps.calendarData
		});
	}

	selectAllDayTime(day) {
		const {calendarData} = this.state;
		let tmp = calendarData;
		if (calendarData[day][0] && calendarData[day][0].et === 1439 && calendarData[day][0].bt === 0) {
			tmp[day] = [];
		}
		else {

			tmp[day] = [{
				'bt': 0,
				'et': 1439
			}];

		}

		this.props.onCalandarElemenetChange(tmp);
	}

	selectOneHour(day, time) {
		const {calendarData} = this.state;
		let isHourSelected = false;
		if (calendarData[day].length > 0) {
			for (let i = 0; i < calendarData[day].length; i++) {
				if (time[0] === calendarData[day][i].bt && time[1] === calendarData[day][i].et) {
					isHourSelected = true;
				}
			}
		}
		if (!isHourSelected) {
			let tmp = {'bt': time[0], 'et': time[1]};
			calendarData[day].push(tmp);
			this.props.onCalandarElemenetChange(calendarData);
		}
	}

	renderDays() {
		const {datePeriod, calendarData} = this.state;
		const {container} = styles;

		return (
			<View style={{flex: 1}}>
				<DaysNameRow calendarData={calendarData}/>
				<ButtonsRow calendarData={calendarData} onPress={this.selectAllDayTime}/>
				<View style={[container]}>
					<TimeNameColumn datePeriod={datePeriod}/>
					<HoursColumn
						calendarData={calendarData}
						datePeriod={datePeriod}
						selectOneHour={this.selectOneHour}/>
				</View>

			</View>
		);

	}

	clearAll() {
		let calendarData = this.state.calendarData;
		for (let data in calendarData) {
			calendarData[data] = [];
		}
		this.props.onCalandarElemenetChange(calendarData);
	}

	saveChanges() {
		let data = JSON.stringify(this.state.calendarData);
		Alert.alert(
			'Result',
			data,
			[{text: 'OK', onPress: () => console.log('OK Pressed')}]
		);
	}

	render() {
		const {buttonContainer, buttonStyle, buttonTitle} = styles;
		return (
			<View>
				<BackHeader leftButtonPress={() => Actions.pop()}/>
				<ScrollView style={Platform.OS === 'android' ? {marginBottom: 80} : {marginBottom: 60}}>
					<View style={{flexDirection: 'row'}}>
						{this.renderDays()}
					</View>
					<View style={buttonContainer}>
						<TouchableOpacity style={buttonStyle} onPress={() => this.clearAll()}>
							<Text style={buttonTitle}>Clear</Text>
						</TouchableOpacity>
						<TouchableOpacity style={buttonStyle} onPress={() => this.saveChanges()}>
							<Text style={buttonTitle}>Save Changes</Text>
						</TouchableOpacity>
					</View>
				</ScrollView>
			</View>
		);
	}
}
const colors = {
	activeColor: 'rgb(148,148,148)',
	activeDayColor: 'rgb(169,169,169)',
	transparent: 'transparent',
	white: '#fff'
};

const styles = {
	container: {
		flexDirection: 'row',
		alignItems: 'stretch',
		justifyContent: 'center',
		flex: 1,
		borderBottomColor: 'grey',
		borderBottomWidth: 1
	},
	buttonContainer: {
		flex: 1,
		flexDirection: 'row',
		padding: 5
	},
	buttonStyle: {
		flex: 1,
		height: 30,
		paddingLeft: 10,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.activeColor,
		borderColor: colors.white,
		borderWidth: 1
	},
	buttonTitle: {
		color: colors.white
	}
};
const mapStateToProps = ({main}) => {
	const {calendarData, datePeriod, orientation, deviceWidth, deviceHeight} = main;
	return {calendarData, datePeriod, orientation, deviceWidth, deviceHeight};
};

export default connect(mapStateToProps, {onCalandarElemenetChange})(CalendarContainer);
