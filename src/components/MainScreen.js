import React, {Component} from 'react';
import {
	View
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import {Header, Tabs, SideMenu} from './common';
import BlogList from './BlogList';
import CalendarContainer from './CalandarContainer';
import {changePageTitle, appLayout} from '../actions';

class MainScreen extends Component {
	constructor (props) {
		super(props);
		this.state = {
			isMenuOpen: false
		};
		this.openMenu = this.openMenu.bind(this);
		this.closeMenu = this.closeMenu.bind(this);
		this.showSearchScreen = this.showSearchScreen.bind(this);
	}

	openMenu () {
		this.setState({
			isMenuOpen: true
		});
	}

	closeMenu () {
		this.setState({
			isMenuOpen: false
		});
	}

	renderSideMenu () {
		if (this.state.isMenuOpen) {
			return (<SideMenu close={this.closeMenu}/>);
		}
		else {
			return null;
		}
	}

	showSearchScreen () {
		Actions.search();
	}

	renderPage () {
		return (
			<View style={{flex: 1}}>
				<BlogList/>
				<Tabs onTabChange={this.props.changePageTitle}/>
			</View>
		);
	}

	renderCalendar () {
		return (
			<CalendarContainer/>
		);
	}

	_onLayout (event) {
		console.log(event);
		this.props.appLayout(event);
	}

	render () {
		console.log(this.props.orientation);
		return (
			<View style={styles.container} onLayout={event => this._onLayout(event)}>
				<Header
					title={this.props.title}
					leftButtonPress={() => console.log('you press button')}
					rightButtonPress={this.showSearchScreen}/>
				{this.renderPage()}
				{this.renderSideMenu()}
			</View>
		);
	}
}

const styles = {
	container: {
		flex: 1
	}
};
const mapStateToProps = ({main}) => {
	const {title} = main;
	return {title};
};

export default connect(mapStateToProps, {changePageTitle, appLayout})(MainScreen);

