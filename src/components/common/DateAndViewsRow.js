/**
 * Created by mponomarets on 7/2/17.
 */
import React, {Component} from 'react';
import {
	View,
	Text
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class DateAndViewsRow extends Component {
	prettyDate (date) {
		let monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
		];
		let tmp = new Date(date);
		return tmp.getDate() + ' ' + monthNames[tmp.getMonth()] + ' ' + tmp.getFullYear();
	}

	render () {
		const {date, views, orange, dark} = this.props;
		const {container, iconTextContainer, textStyles} = styles;
		const iconColor = orange ? colors.orangeIconColor : dark ? colors.darkStyleIconColor : colors.iconColor;
		return (
			<View style={container}>
				<View style={iconTextContainer}>
					<Icon name="md-time" size={18} color={iconColor}/>
					<Text style={[textStyles, {color: iconColor}]}>{this.prettyDate(date)}</Text>
				</View>
				<View style={iconTextContainer}>
					<Icon name="md-eye" size={18} color={iconColor}/>
					<Text style={[textStyles, {color: iconColor}]}>{views}</Text>
				</View>
			</View>
		);
	}
}
const colors = {
	iconColor: 'rgb(158, 162, 166)',
	textColor: '#b4b7ba',
	orangeIconColor: '#fff',
	darkStyleIconColor: 'rgb(199, 199, 199)'
};

const styles = {
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	iconTextContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},
	textStyles: {
		marginLeft: 10
	}
};
export {DateAndViewsRow};