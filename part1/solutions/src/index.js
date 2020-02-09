import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom' 
import 'bulma/css/bulma.css';
import ReactDOM from 'react-dom';

import List from './components/list'
import SuggestionForm from './components/suggestionform'

const App = () => {
	return (
		<Router>
			<nav className='navbar is-primary' role='navigation' aria-label='main-navigation'>
				<div className='navbar-brand'>
					<a className='navbar-item' href='https://blockchainpsu.com'>
						<img src='https://via.placeholder.com/112x28'/>
					</a>
				</div>
				<div className='navbar-menu'>
					<div className='navbar-start'>
						<Link to='/' className='navbar-item'>
							Home
						</Link>
						<Link to='/create' className='navbar-item'>
							Create a Suggestion
						</Link>
					</div>
					<div className='navbar-end'>
					</div>
				</div>
			</nav>
			<Route path='/' exact component={List} />
			<Route path='/create' component={SuggestionForm} />
			<footer className='footer'>
				<div className='content has-text-centered'>
					<p>
						<strong>Suggestions List</strong> by Justin Huang for <a href='https://blockchainpsu.com'>Blockchain@PSU</a>.
					</p>
				</div>
			</footer>
		</Router>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))
