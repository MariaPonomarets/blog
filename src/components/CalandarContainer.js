/**
 * Created by mponomarets on 7/2/17.
 */
/**
 * Created by mponomarets on 7/1/17.
 */
import React, {Component} from 'react';
import {
	View,
	TouchableOpacity,
	Dimensions,
	Text,
	ScrollView
} from 'react-native';

const {width} = Dimensions.get('window');

class CalendarContainer extends Component {
	constructor (props) {
		super(props);
	}

	renderDay () {
		return (<View style={{
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			width: width / 10
		}}>
			<View style={{
				height: width / 8,
				width: width / 10,
				alignItems: 'center',
				justifyContent: 'center',
				borderColor: 'grey',
				borderWidth: 1
			}}>
				<Text/>
			</View>
			<TouchableOpacity style={{
				height: width / 8,
				width: width / 10,
				alignItems: 'center',
				justifyContent: 'center',
				borderColor: 'grey',
				borderWidth: 1
			}}>
				<Text>MO</Text>
			</TouchableOpacity>
			<TouchableOpacity style={{
				height: width / 8,
				width: width / 10,
				alignItems: 'center',
				justifyContent: 'center',
				borderColor: 'grey',
				borderWidth: 1
			}}>
				<Text>TU</Text>
			</TouchableOpacity>
			<TouchableOpacity style={{
				height: width / 8,
				width: width / 10,
				alignItems: 'center',
				justifyContent: 'center',
				borderColor: 'grey',
				borderWidth: 1
			}}>
				<Text>WE</Text>
			</TouchableOpacity>
			<TouchableOpacity style={{
				height: width / 8,
				width: width / 10,
				alignItems: 'center',
				justifyContent: 'center',
				borderColor: 'grey',
				borderWidth: 1
			}}>
				<Text>TH</Text>
			</TouchableOpacity>
			<TouchableOpacity style={{
				height: width / 8,
				width: width / 10,
				alignItems: 'center',
				justifyContent: 'center',
				borderColor: 'grey',
				borderWidth: 1
			}}>
				<Text>FR</Text>
			</TouchableOpacity>
			<TouchableOpacity style={{
				height: width / 8,
				width: width / 10,
				alignItems: 'center',
				justifyContent: 'center',
				borderColor: 'grey',
				borderWidth: 1
			}}>
				<Text>SA</Text>
			</TouchableOpacity>
			<TouchableOpacity style={{
				height: width / 8,
				width: width / 10,
				alignItems: 'center',
				justifyContent: 'center',
				borderColor: 'grey',
				borderWidth: 1
			}}>
				<Text>SU</Text>
			</TouchableOpacity>
		</View>);
	}

	renderAllDay () {
		return (<View style={{
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			width: width / 10,
			backgroundColor: 'red'
		}}>
			<View style={{width: width / 10, height: width / 8, alignItems: 'center', justifyContent: 'center'}}><Text>ALL
				DAY</Text></View>
			<TouchableOpacity style={{
				height: width / 8,
				width: width / 10,
				alignItems: 'center',
				justifyContent: 'center',
				borderColor: 'red',
				borderWidth: 1
			}}>
			</TouchableOpacity>
			<TouchableOpacity style={{
				height: width / 8,
				width: width / 10,
				alignItems: 'center',
				justifyContent: 'center',
				borderColor: 'blue',
				borderWidth: 1
			}}>
			</TouchableOpacity>
			<TouchableOpacity style={{
				height: width / 8,
				width: width / 10,
				alignItems: 'center',
				justifyContent: 'center',
				borderColor: 'red',
				borderWidth: 1
			}}>
			</TouchableOpacity>
			<TouchableOpacity style={{
				height: width / 8,
				width: width / 10,
				alignItems: 'center',
				justifyContent: 'center',
				borderColor: 'blue',
				borderWidth: 1
			}}>
			</TouchableOpacity>
			<TouchableOpacity style={{
				height: width / 8,
				width: width / 10,
				alignItems: 'center',
				justifyContent: 'center',
				borderColor: 'red',
				borderWidth: 1
			}}>
			</TouchableOpacity>
			<TouchableOpacity style={{
				height: width / 8,
				width: width / 10,
				alignItems: 'center',
				justifyContent: 'center',
				borderColor: 'blue',
				borderWidth: 1
			}}>
			</TouchableOpacity>
			<TouchableOpacity style={{
				height: width / 8,
				width: width / 10,
				alignItems: 'center',
				justifyContent: 'center',
				borderColor: 'red',
				borderWidth: 1
			}}>
			</TouchableOpacity>
		</View>);
	}

	renderColumn (color) {
		return (<View style={{
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			width: width / 10,
			backgroundColor: color
		}}>
			<TouchableOpacity style={{height: width / 8, alignItems: 'center', justifyContent: 'center'}}>
			</TouchableOpacity>
			<TouchableOpacity style={{height: width / 8, alignItems: 'center', justifyContent: 'center'}}>
			</TouchableOpacity>
			<TouchableOpacity style={{height: width / 8, alignItems: 'center', justifyContent: 'center'}}>
			</TouchableOpacity>
		</View>);
	}

	render () {
		const {container} = styles;

		return (
			<ScrollView style={container}>
				<View style={{flexDirection: 'row'}}>
					{this.renderDay()}
					{this.renderAllDay()}
					{this.renderColumn('blue')}
					{this.renderColumn('grey')}
					{this.renderColumn('blue')}
					{this.renderColumn('grey')}
					{this.renderColumn('blue')}
					{this.renderColumn('grey')}
					{this.renderColumn('blue')}
					{this.renderColumn('grey')}
				</View>
			</ScrollView>
		);
	}
}
const colors = {
	bgContainer: 'rgb(247, 248, 249)',
	bgOrange: '#ffc80a',
	bgDark: '#292929'
};

const styles = {
	container: {},
	descriptionContainer: {
		marginTop: -10,
		backgroundColor: colors.bgContainer,
		width: width - 40,
		paddingHorizontal: 20,
		paddingVertical: 30,
		borderBottomLeftRadius: 5,
		borderBottomRightRadius: 5
	},
	orangeContainer: {
		backgroundColor: colors.bgOrange
	},
	darkContainer: {
		backgroundColor: colors.bgDark
	}
};

export default CalendarContainer;