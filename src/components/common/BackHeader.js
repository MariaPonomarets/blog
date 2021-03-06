/**
 * Created by mponomarets on 6/25/17.
 */
import React, {Component} from 'react';
import {
	Text,
	View,
	TouchableOpacity,
	Platform,
	StatusBar
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const colors = {
	headerBg: '#ffa227',
	textColor: '#fff',
	iconColor: '#fff'
};
class BackHeader extends Component {
	constructor(props) {
		super(props);
	}

	renderStatusBar() {
		if (Platform.OS === 'android') {
			return (<StatusBar
				translucent={true}
				backgroundColor={'transparent'}
			/>);
		} else {
			return (<StatusBar
				barStyle="light-content"
			/>);
		}
	}

	renderLeftButton() {
		const {buttonContainer} = styles;
		if (Platform.OS === 'android') {
			return (<TouchableOpacity
				onPress={this.props.leftButtonPress}
				style={buttonContainer}>
				<Icon name="md-arrow-back" size={22} color={colors.iconColor}/>
			</TouchableOpacity>);
		} else {
			return (
				<TouchableOpacity
					onPress={this.props.leftButtonPress}
					style={buttonContainer}>
					<Icon name="ios-arrow-back" size={22} color={colors.iconColor}/>
				</TouchableOpacity>);
		}
	}

	render() {
		const {headerContainer, header, titleStyle, titleContainer, iosBarHeight} = styles;
		return (
			<View style={Platform.OS === 'android' ? headerContainer : [headerContainer, iosBarHeight]}>
				{this.renderStatusBar()}
				<View style={header}>
					{this.renderLeftButton()}
					<View style={titleContainer}>
						<Text style={titleStyle}>{this.props.title}</Text>
					</View>
				</View>
			</View>
		);
	}
}
const styles = {
	headerContainer: {
		height: 80,
		backgroundColor: colors.headerBg
	},
	header: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-between',
		flexDirection: 'row',
		paddingLeft: 15,
		paddingRight: 15,
		paddingTop: 10
	},
	titleContainer: {
		flex: 0.6,
		alignItems: 'center',
		justifyContent: 'center'
	},
	titleStyle: {
		color: colors.textColor,
		fontSize: 22,
		fontFamily: 'Arvo-Bold'
	},
	buttonContainer: {
		flex: 0.2,
		justifyContent: 'center',
		height: 40
	},
	leftButton: {},
	rightButton: {
		alignItems: 'flex-end'
	},
	iosBarHeight: {
		height: 60,
		paddingTop: 0
	}
};

export {BackHeader};