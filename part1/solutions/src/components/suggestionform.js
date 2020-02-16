import React, { useState } from "react";
import axios from 'axios';

const SuccessNotification = (props) => {
	if (props.show) {
		return (
			<div className='notification is-success'>
				<button className="delete" onClick={props.handleShow}></button>
				Suggestion sent successfully!
			</div>
		)
	} else {
		return (<div></div>)
	}
}

const SuggestionForm = () => {
	const [ subject, setSubject ] = useState("")
	const [ body, setBody ] = useState("")
	const [ showNotif, setShowNotif ] = useState(false) 

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(subject)
		console.log(body)

		// create a new suggestion and add to database
		const newSuggestion = {
			subject: subject,
			body: body
		}
		console.log(newSuggestion)
		axios.post('http://127.0.0.1:3001/suggestions/add', newSuggestion)
			.then(res => console.log(res.data));
		
		setSubject('')
		setBody('')
		setShowNotif(true)
	}

	return (
		<div>
			<section className="hero is-info">
				<div className="hero-body">
					<div className="container">
						<h1 className="title">Create a Suggestion</h1>
						<h2 className="subtitle">Send feedback to your instructors!</h2>
					</div>
				</div>
			</section>
			<SuccessNotification show={showNotif} handleShow={() => setShowNotif(false)}/>
			<section>
				<div className="container">
					<form onSubmit={handleSubmit}>
						<div className="field container">
							<label className="label">subject</label>
							<div className="control">
								<input className="input" type="text" placeholder="suggestion about..." value={subject} onChange={(e) => setSubject(e.target.value)}/>
							</div>
						</div>
						<div className="container">
							<label className="label">suggestion</label>
							<div className="control">
								<textarea className="textarea" placeholder="my suggestion is ..." value={body} onChange={(e) => setBody(e.target.value)}></textarea>
							</div>
						</div>
						<div className="field is-grouped container">
							<div className="control">
								<button type="submit" className="button is-link">submit</button>
							</div>
							<div className="control">
								<button className="button is-link is-light">cancel</button>
							</div>
						</div>
					</form>
				</div>
			</section>
		</div>
	)
}

export default SuggestionForm
