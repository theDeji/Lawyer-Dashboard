require('dotenv').config()
const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(bodyparser.json())
app.use(cors())
app.use(express.json());


const year_route = require('./routes/year');
app.use('/api/year', year_route)

const month_route = require('./routes/month');
app.use('/api/month', month_route)
 
const months_route = require('./routes/months');
app.use('/api/months', months_route)


const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log('Server started on port', PORT));
