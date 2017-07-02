/**
 * Created by mponomarets on 7/2/17.
 */
import React, {Component} from 'react';
import {
	Image
} from 'react-native';

class ImageContainer extends Component {
	render () {
		const {url, width, height} = this.props;
		const {image} = styles;
		return (
			<Image
				style={[{width: width, height: height}, image]}
				source={{uri: url}}/>
		);
	}
}

const styles = {
	image: {
		borderRadius: 5
	}
};
export {ImageContainer};