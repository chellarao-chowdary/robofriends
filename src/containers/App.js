import React , {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Icons from '../components/Icons.js'
import Scroll from '../components/Scroll'
import './App.css'
// import {robots} from './robots'; // contains the data of robots
// It wrapped in {}, because the export is not default.It may contian multiple exports
// If you want to change this to robots, we need to export it as "export default robots"


class App extends Component{
	constructor() {
		super()
		this.state = {
			robots : [],
			searchfield:''
		}
	}
	
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => {this.setState({robots:users})});
	}


	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value})
	}

	render() {
		const {robots,searchfield} = this.state;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
			})
		    return !robots.length ? 
			<h1 className='tc'>Loading...</h1> :
			 (
				<div className='tc'>
					<h1 className='f1'>RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
					<CardList robots={filteredRobots}/>
					</Scroll>
					<Icons/>
				</div>
		);
	}
}
export default App;