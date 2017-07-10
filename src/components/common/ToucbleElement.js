/**
 * Created by mponomarets on 7/9/17.
 */
import React, {Component} from 'react';
import {
	TouchableOpacity
} from 'react-native';

class ToucbleElement extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isTouch: false
		};
	}

	onClick() {
		const {onTuch, time, data, onRemove} = this.props;
		console.log(this.state.isTouch);
		if (!this.state.isTouch) {
			this.setState({
				isTouch: true
			}, () => onTuch(data, time));
		}
		else {
			this.setState({
				isTouch: false
			}, () => onRemove(data, time));
		}
	}

	render() {
		const {styles} = this.props;
		return (
			<TouchableOpacity style={styles}/>
		);
	}
}

export {ToucbleElement};