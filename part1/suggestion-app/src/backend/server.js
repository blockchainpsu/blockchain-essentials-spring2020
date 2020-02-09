const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())

// Add mongodb setup below

const routes = express.Router()

// Add routes below

// Tells what port the Node server should run on
const PORT = 3001
app.listen(PORT)
