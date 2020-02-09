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
	const [ suggestions, setSuggestions ] = useState({ suggestions: [{subject: 'hi', body: 'hi'}] })

	const generateList = () => {
		if (suggestions.length) {
			return suggestions.map((suggestion, i) => <Suggestion content={suggestion} key={i} />)
		} else {
			return null
		}
	}

	const handleSetSuggestions = (res) => setSuggestions(res.data)

	useEffect(() => {
		axios.get('http://127.0.0.1:3001/suggestions/')
			.then(res => handleSetSuggestions(res))
			.catch((err) => console.log(err))
	})

	return (
		<div class="container">
			<table className="table is-fullwidth is-hoverable" style={{ marginTop: 20 }}>
				<thead>
					<tr>
						<th>Subject</th>
						<th>Suggestion</th>
					</tr>
				</thead>
				<tbody>
					{generateList()}
				</tbody>
			</table>
		</div>
	)
}

export default List
