const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/suggestions', { useNewUrlParser: true })
const connection = mongoose.connection

connection.once('open', () => {
	console.log("MongoDB database connected successfully")
})

const routes = express.Router()

app.use('/suggestions', routes);

let Suggestion = require('./model')
routes.route('/').get((req, res) => {
	Suggestion.find((err, suggestions) => {
		if (err) {
			console.log(err)
		} else {
			res.json(suggestions)
		}
	})
})

routes.route('/add').post(function(req, res) {
	let sugg = new Suggestion(req.body);
    sugg.save()
        .then(sugg => {
            res.status(200).json({'suggestion': req.body });
        })
        .catch(err => {
            res.status(400).send('adding new suggestion failed');
        })
})

//const fs = require('fs')
//let dummy = JSON.parse(fs.readFileSync('dummy.json', 'utf-8'))
//app.get('/all', (req, res) => {
//	res.json(dummy)
//})
//
//app.get('/all/:id', (req, res) => {
//	const id = Number(req.params.id)
//	console.log(id)
//	const sugg = dummy.find(sugg => sugg.id === id)
//	console.log(sugg)
//	res.json(sugg)
//})
//
const PORT = 3001
app.listen(PORT)
