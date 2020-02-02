// Put your imports here
import React from "react" 

// Subcomponent to be used later
const Suggestion = (props) => (
	<tr>
		<td>{props.content.subject}</td>
		<td>{props.content.body}</td>
	</tr>
)

// This component will be heavily modified later
const List = () => {
	return (
		<div class="container">
			<h3>List of Suggestions</h3>
			
			{/* Creates a table to display suggestions */}
			<table className="table is-striped is-hoverable is-fullwidth" style={{ marginTop: 20 }}>
				<thead>
					<tr>
						<th>Subject</th>
						<th>Suggestion</th>
					</tr>
				</thead>
					
				{/* Add table body to populate with results from database */}

			</table>
		</div>
	)
}

export default List
