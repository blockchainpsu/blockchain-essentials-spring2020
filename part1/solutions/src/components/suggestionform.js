// imports go here
import React, {useState} from 'react'

const SuccessNotification = (props) => {
	if (props.show) {
		return (
			<div className='notification is-success'>
				<button className="delete" onClick={props.handleChange}></button>
				Suggestion sent successfully!
			</div>
		)
	} else {
		return (<div></div>)
	}
}

const SuggestionForm = () => {
	// Create your states here
	const [ subject, setSubject ] = useState('')
	const [ body, setBody ] = useState('')
	const [ showNotif, setShowNotif ] = useState(false)

	// Add code to show behavior when form is submitted
	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(subject)
		console.log(body)
		
		setShowNotif(true)
		setSubject('')
		setBody('')
	}

	// Add code to show behavior when cancel button is clicked
	const handleCancel = (e) => {
		e.preventDefault()
		setShowNotif(false)
		setSubject('')
		setBody('')
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
			<SuccessNotification show={showNotif} handleChange={(e) => setShowNotif(false)}/>
			{/* Section that holds the web form */}
			<section>
				<div className="container">
					<form onSubmit={handleSubmit}>
						{/* Subject Field */}
						<div className="field container">
							<label className="label">subject</label>
							<div className="control">
								<input className="input" type="text" placeholder="suggestion about..." value={subject} onChange={(e) => setSubject(e.target.value)}/>
							</div>
						</div>
						{/* Body Field */}
						<div className="container">
							<label className="label">suggestion</label>
							<div className="control">
								<textarea className="textarea" placeholder="my suggestion is ..." value={body} onChange={(e) => setBody(e.target.value)}></textarea>
							</div>
						</div>
						{/* Buttons field */}
						<div className="field is-grouped container">
							<div className="control">
								<button type="submit" className="button is-link">submit</button>
							</div>
							<div className="control">
								<button className="button is-link is-light" onClick={handleCancel}>cancel</button>
							</div>
						</div>
					</form>
				</div>
			</section>
		</div>
	)
}

export default SuggestionForm
