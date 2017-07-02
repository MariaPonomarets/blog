/**
 * Created by mponomarets on 7/2/17.
 */
import React, {Component} from 'react';
import {
	View,
	Text
} from 'react-native';

class BlogDescription extends Component {
	render () {
		const {title, description, orange, dark} = this.props;
		const {container, titleStyle} = styles;
		const textColor = orange ? colors.titleOrangeStyle : dark ? colors.titleDarkStyle : colors.titleColor;
		const descriptionColor = orange ? colors.descriptionOrangeColor : dark ? colors.descriptionDarkColor : colors.textColor;
		return (
			<View style={container}>
				<Text style={[titleStyle, {color: textColor}]}>{title}</Text>
				<Text style={{color: descriptionColor}}>{description}</Text>
			</View>
		);
	}
}
const colors = {
	titleColor: '#4f4f4f',
	textColor: '#b6b9bc',
	titleOrangeStyle: 'rgb(255,250,237)',
	descriptionOrangeColor: 'rgb(255,230,162)',
	titleDarkStyle: 'rgb(220,220,220)',
	descriptionDarkColor: 'rgb(116,119,122)'
};

const styles = {
	container: {
		alignItems: 'center',
		justifyContent: 'flex-start',
		marginBottom: 30
	},
	titleStyle: {
		fontSize: 18,
		marginBottom: 15
	}
};
BlogDescription.defaultProps = {
	title: 'Title for blog',
	description: 'Blog description'
};

export {BlogDescription};