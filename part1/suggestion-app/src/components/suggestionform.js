// imports go here

const SuccessNotification = (props) => {
	if (/* CHANGEME */) {
		return (
			<div className='notification is-success'>
				<button className="delete" onClick={/* CHANGEME */}></button>
				Suggestion sent successfully!
			</div>
		)
	} else {
		return (<div></div>)
	}
}

const SuggestionForm = () => {
	// Create your states here

	// Add code to show behavior when form is submitted
	const handleSubmit = (e) => {
		e.preventDefault()
	}

	// Add code to show behavior when cancel button is clicked
	const handleCancel = (e) => {
		e.preventDefault()
	}
	
	// JSX code that shows rendering
	return (
		<div>

			{/* Don't change this section */}
			<section className="hero is-info">
				<div className="hero-body">
					<div className="container">
						<h1 className="title">Create a Suggestion</h1>
						<h2 className="subtitle">Send feedback to your instructors!</h2>
					</div>
				</div>
			</section>

			{/* Render SuccessNotification here, but only if the form is submitted */}
			
			{/* Section that holds the web form */}
			<section>
				<div className="container">
					<form>
						{/* Subject Field */}
						<div className="field container">
							<label className="label">subject</label>
							<div className="control">
								<input className="input" type="text" placeholder="suggestion about..." value={/* what value? */} onChange={/* what handles the change? */}/>
							</div>
						</div>
						{/* Body Field */}
						<div className="container">
							<label className="label">suggestion</label>
							<div className="control">
								<textarea className="textarea" placeholder="my suggestion is ..." value={/* what value? */} onChange={/* what handles the change? */}></textarea>
							</div>
						</div>
						{/* Buttons field */}
						<div className="field is-grouped container">
							<div className="control">
								<button type="submit" className="button is-link">submit</button>
							</div>
							<div className="control">
								<button className="button is-link is-light" onClick={/* What goes here? */}>cancel</button>
							</div>
						</div>
					</form>
				</div>
			</section>
		</div>
	)
}

export default SuggestionForm
