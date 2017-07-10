/**
 * Created by mponomarets on 7/10/17.
 */
import React, {Component} from 'react';
import {
	View,
	Text,
	TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class ButtonsRow extends Component {
	constructor(props) {
		super(props);
		this.state = {
			calendarData: this.props.calendarData
		};
	}
	componentWillReceiveProps(newProps) {
		this.setState({
			calendarData: newProps.calendarData
		});
	}

	onButtonPress(key) {
		this.props.onPress(key);
	}

	renderButtonRow() {
		const {calendarData} = this.state;
		const {buttonStyle} = styles;
		return Object.keys(calendarData).map((day, index) => {
			let icon = null;
			if (calendarData[day].length > 0) {
				if (calendarData[day][0].bt === 0 && calendarData[day][0].et === 1439) {
					icon = <Icon name="ios-checkmark-circle-outline" size={18} color={'#fff'}/>;
				}
			}

			return (
				<TouchableOpacity
					style={buttonStyle}
					key={index}
					onPress={() => this.onButtonPress(day)}>
					<View>
						{icon}
					</View>
				</TouchableOpacity>
			);
		});
	}

	render() {
		const {container, elemContainer} = styles;
		return (
			<View style={container}>
				<View style={[elemContainer, {backgroundColor: 'rgb(148,148,148)'}]}>
					<Text>ALL DAY</Text>
				</View>
				{this.renderButtonRow()}
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
		flex: 1,
		borderBottomColor: 'grey',
		borderBottomWidth: 1
	},
	elemContainer: {
		flex: 0.2,
		alignItems: 'center',
		justifyContent: 'center'
	},
	dayStyle: {
		height: 40
	},
	activeDayStyle: {
		backgroundColor: colors.activeDayColor,
		height: 40
	},
	buttonStyle: {
		flex: 0.2,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'rgb(148,148,148)',
		height: 40
	}
};


export {ButtonsRow};