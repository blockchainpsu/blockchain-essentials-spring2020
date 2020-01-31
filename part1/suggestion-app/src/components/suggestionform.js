import React, { useState } from "react";

const SuggestionForm = () => {
	const [ subject, setSubject ] = useState("")
	const [ body, setBody ] = useState("")

	return (
		<div>
			<section class="hero is-info">
				<div class="hero-body">
					<div class="container">
						<h1 class="title">Create a Suggestion</h1>
						<h2 class="subtitle">Send feedback to your instructors!</h2>
					</div>
				</div>
			</section>
			<section>
				<div class="container">
					<div class="field">
						<label class="label">Subject</label>
						<div class="control">
							<input class="input" type="text" placeholder="Suggestion about..." value={subject}/>
						</div>
					</div>
					<div>
						<label class="label">Suggestion</label>
						<div class="control">
							<textarea class="textarea" placeholder="My suggestion is ..." value={body}></textarea>
						</div>
					</div>
					<div class="field is-grouped">
						<div class="control">
							<button class="button is-link">Submit</button>
						</div>
						<div class="control">
							<button class="button is-link is-light">Cancel</button>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default SuggestionForm
