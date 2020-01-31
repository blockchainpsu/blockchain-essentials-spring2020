import React from "react";
import "bulma/css/bulma.css";
import ReactDOM from 'react-dom';

import List from "./components/list"
import SuggestionForm from "./components/suggestionform"

const App = () => {
	return (
		<div>
			<nav class="navbar is-primary" role="navigation" aria-label="main-navigation">
				<div class="navbar-brand">
					<a class="navbar-item" href="https://blockchainpsu.com">
						<img src="https://via.placeholder.com/112x28"/>
					</a>
				</div>
				<div class="navbar-menu">
					<div class="navbar-start">
						<a class="navbar-item">
							Home
						</a>
						<a class="navbar-item">
							Create a Suggestion
						</a>
					</div>
					<div class="navbar-end">
					</div>
				</div>
			</nav>
			<List />
			<SuggestionForm />
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))
