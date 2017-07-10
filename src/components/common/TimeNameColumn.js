/**
 * Created by mponomarets on 7/10/17.
 */
import React, {Component} from 'react';
import {
	View,
	Text
} from 'react-native';

class TimeNameColumn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			datePeriod: this.props.datePeriod
		};
	}

	render() {
		const {datePeriod} = this.state;
		const {container, elementContainer} = styles;
		const allTimePeriodName = datePeriod.map((time, index) => {
			return (
				<View style={elementContainer} key={index}>
					<Text>{time.period}</Text>
				</View>
			);
		});
		return (
			<View
				style={container}>
				{allTimePeriodName}
			</View>
		);
	}
}
const styles = {
	container: {
		flex: 1 / 8,
		flexDirection: 'column',
		borderRightColor: 'rgb(148,148,148)',
		borderRightWidth: 1
	},
	elementContainer: {
		flexDirection: 'column',
		height: 60,
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		paddingHorizontal: 3,
		paddingTop: 3,
		borderBottomColor: 'rgb(148,148,148)',
		borderBottomWidth: 1
	}
};

export {TimeNameColumn};