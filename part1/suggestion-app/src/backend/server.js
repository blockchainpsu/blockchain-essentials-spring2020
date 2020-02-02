const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

app.use(cors())

// Add mongodb setup below

const routes = express.Router()

// Add routes below

// Tells what port the Node server should run on
const PORT = 3001
app.listen(PORT)
