import React, { useState, useEffect } from "react"
// import { Link } from 'react-router-dom' 
import axios from 'axios'

const Suggestion = (props) => (
	<tr>
		<td>{props.content.subject}</td>
		<td>{props.content.body}</td>
	</tr>
)

const List = () => {
	const [ suggestions, setSuggestions ] = useState({ suggestions: [] })

	const SuggestionList = (props) => {
		return (
			<tbody>
				{props.content.map((suggestion, i) => <Suggestion content={suggestion} key={i} />)}
			</tbody>
		)
	}

	const handleSetSuggestions = () => setSuggestions(res.data)

	useEffect(() => {
		axios.get('http://127.0.0.1:3001/suggestions/')
			.then(handleSetSuggestions())
			.catch((err) => console.log(err)) 
	})

	return (
		<div class="container">
			<h3>List of Suggestions</h3>
			<table className="table table-striped" style={{ marginTop: 20 }}>
				<thead>
					<tr>
						<th>Subject</th>
						<th>Suggestion</th>
					</tr>
				</thead>
				<SuggestionList content={suggestions.suggestions} />
			</table>
		</div>
	)
}

export default List
