/**
 * Created by mponomarets on 7/1/17.
 */
import React, {Component} from 'react';
import {
	View,
	TouchableOpacity
} from 'react-native';
import {ImageContainer, DateAndViewsRow, BlogDescription} from './common';

class BlogContainer extends Component {
	constructor (props) {
		super(props);
	}

	render () {
		const {container, descriptionContainer, orangeContainer, darkContainer} = styles;
		const {img, title, description, date, views} = this.props.blog;
		const {orange, dark, orientation, width, height} = this.props;
		const customStyleOrange = orange ? orangeContainer : null;
		const customStyleDark = dark ? darkContainer : null;
		const containerHeight = orientation === 'LANDSCAPE' ? height : height / 3;
		return (
			<TouchableOpacity style={[container, {width: width - 40}]}>
				<View>
					<ImageContainer url={img} width={width - 40} height={containerHeight}/>
					<View style={[descriptionContainer, customStyleOrange, customStyleDark]}>
						<BlogDescription orange={!!(orange)} dark={!!(dark)} title={title} description={description}/>
						<DateAndViewsRow orange={!!(orange)} dark={!!(dark)} date={date} views={views}/>
					</View>
				</View>
			</TouchableOpacity>
		);
	}
}
const colors = {
	bgContainer: 'rgb(247, 248, 249)',
	bgOrange: '#ffc80a',
	bgDark: '#292929'
};

const styles = {
	container: {
		marginHorizontal: 20,
		borderRadius: 10,
		marginTop: 20
	},
	descriptionContainer: {
		marginTop: -10,
		backgroundColor: colors.bgContainer,
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

export default BlogContainer;