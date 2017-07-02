/**
 * Created by mponomarets on 7/1/17.
 */

import React, {Component} from 'react';
import {
	ScrollView
} from 'react-native';
import {connect} from 'react-redux';
import BlogContainer from './BlogContainer';

class BlogList extends Component {
	constructor (props) {
		super(props);
	}

	render () {
		const {orientation, deviceWidth, deviceHeight} = this.props;
		const list = this.props.blogNewsList.map((item, index) => {
			return <BlogContainer
				width={deviceWidth}
				height={deviceHeight}
				orientation={orientation} key={index}
				blog={item}
				orange={index === 3}
				dark={index === 2}/>;
		});
		return (
			<ScrollView style={styles.container}>
				{list}
			</ScrollView>
		);
	}
}

const styles = {
	container: {
		flex: 1,
		marginBottom: 60
	}
};
const mapStateToProps = ({main}) => {
	const {blogNewsList, orientation, deviceWidth, deviceHeight} = main;
	return {blogNewsList, orientation, deviceWidth, deviceHeight};
};

export default connect(mapStateToProps, {})(BlogList);