import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Link,
} from 'react-router-dom'
import Home from './home'
import Register from './register'
import Registered from './registered'

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<Router>
				<div>
					<nav className ="navbar navbar-dark" style={{backgroundColor: '#8ca5a0'}}>
  						<a className = "navbar-brand" href="/"><h1>Home</h1></a>
					</nav>
					<div id = "app">
						<Route exact path="/" component={Home}/>
						<Route path="/register" component={Register}/>
						<Route path="/registered_entries" component={Registered}/>
					</div>
				</div>
			</Router>
		);
	}
}

export default App