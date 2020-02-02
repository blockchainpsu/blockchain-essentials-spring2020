// imports go here

// import components here

// main React component to be rendered
const App = () => {
	return (
		<Router>

			{/* This is a navbar. Keep most of this unchanged */}
			
			<nav className='navbar is-primary' role='navigation' aria-label='main-navigation'>
				<div className='navbar-brand'>
					<a className='navbar-item' href='https://blockchainpsu.com'>
						<img src='https://via.placeholder.com/112x28'/>
					</a>
				</div>
				<div className='navbar-menu'>
					<div className='navbar-start'>
						
						{/* Create navbar entries here as Links */}

					</div>
					<div className='navbar-end'>
					</div>
				</div>
			</nav>
			
			{/* Create Routes here to import components */}
			
			{/* This is a footer. Keep this mostly unchanged */}
			<footer className='footer'>
				<div className='content has-text-centered'>
					<p>
						<strong>Suggestions List</strong> by YOUR NAME for <a href='https://blockchainpsu.com'>Blockchain@PSU</a>.
					</p>
				</div>
			</footer>
		</Router>
	)
}

// sends App component to HTML document to be rendered
ReactDOM.render(<App />, document.getElementById('root'))
