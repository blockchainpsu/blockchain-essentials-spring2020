// imports go here

// Create your schema here

{/* Don't change this. Essentially changes mongodb _id field to a String field and deletes the version field */}
suggSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString()
		delete returnedObject._id
		delete returnedObject._v
	}
})

// export your schema here
