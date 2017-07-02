/**
 * Created by mponomarets on 6/25/17.
 */
import React, {Component} from 'react';
import {
	View,
	Text,
	TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class Tabs extends Component {
	constructor (props) {
		super(props);
		this.state = {
			activeTab: 1,
			tabsData: [
				{tabIcon: 'ios-home-outline', tabIconActive: 'ios-home', tabName: 'Home', tabID: 0},
				{tabIcon: 'ios-list-box-outline', tabIconActive: 'ios-list-box', tabName: 'Blog', tabID: 1},
				{tabIcon: 'ios-chatboxes-outline', tabIconActive: 'ios-chatboxes', tabName: 'Contact', tabID: 2}
			]
		};
	}

	changeActiveTab (id, name) {
		this.setState({
			activeTab: id
		}, () => {
			this.props.onTabChange(name);
		});
	}

	renderTabButtons (name, icon, id, activeIcon) {
		return (
			<TouchableOpacity
				style={styles.touchableContainer}
				key={id}
				onPress={() => this.changeActiveTab(id, name)}
				activeOpacity={0.8}>
				<Icon
					name={this.state.activeTab === id ? activeIcon : icon}
					style={this.state.activeTab === id ? styles.activeIconStyle : styles.iconStyle} size={20}/>
				<Text style={this.state.activeTab === id ? styles.activeIconName : styles.iconName}>{name}</Text>
			</TouchableOpacity>
		);
	}

	generateTabsElements () {
		let data = this.state.tabsData;
		let tabsElements = [];
		data.forEach((item, i, data) => {
			tabsElements.push(
				this.renderTabButtons(data[i].tabName, data[i].tabIcon, data[i].tabID, data[i].tabIconActive)
			);
		});
		return tabsElements;
	}

	render () {
		return (
			<View style={styles.tabsContainer}>
				{this.generateTabsElements()}
			</View>
		);
	}
}
const colors = {
	containerBg: '#ccc',
	tabBg: '#f7f7f7',
	iconColor: '#929292',
	activeIconColor: '#ffa227'
};
const styles = {
	tabsContainer: {
		height: 60,
		flexDirection: 'row',
		borderTopColor: colors.containerBg,
		borderTopWidth: 1,
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		backgroundColor: colors.tabBg
	},
	touchableContainer: {
		justifyContent: 'center',
		backgroundColor: colors.tabBg,
		flex: 1
	},
	iconStyle: {
		alignSelf: 'center',
		marginBottom: 5,
		color: colors.iconColor
	},
	iconName: {
		alignSelf: 'center',
		fontSize: 12,
		color: colors.iconColor,
		fontFamily: 'Montserrat-Regular'
	},
	activeIconStyle: {
		alignSelf: 'center',
		marginBottom: 5,
		color: colors.activeIconColor
	},
	activeIconName: {
		alignSelf: 'center',
		fontSize: 12,
		color: colors.activeIconColor
	}
};
export {Tabs};
