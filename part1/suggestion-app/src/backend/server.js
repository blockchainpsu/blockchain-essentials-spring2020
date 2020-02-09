const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())

mongoose.connect('mongodb://127.0.0.1:27017/suggestions', { useNewUrlParser: true })
const connection = mongoose.connection

connection.once('open', () => {
	console.log("MongoDB database connected successfully")
})

const routes = express.Router()

app.use('/suggestions', routes);

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

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

const PORT = 3001
app.listen(PORT)
