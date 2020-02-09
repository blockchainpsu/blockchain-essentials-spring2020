const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const suggSchema = new Schema({
	subject: String,
	body: String
})

suggSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString()
		delete returnedObject._id
		delete returnedObject._v
	}
})

module.exports = mongoose.model('suggestions', suggSchema)
