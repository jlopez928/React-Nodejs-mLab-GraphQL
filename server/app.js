const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

//CORS -- Allow cros-origin request
app.use(cors())

//connect to mongoDB DB
mongoose.connect('mongodb://localhost:27017/gql-db')
mongoose.connection.once('open', () => {
    console.log('connected to database')
})

app.use("/graphql", graphqlHTTP({
    schema: schema,
    graphiql: true
}))

app.listen(4000, () => {
    console.log("now listening for request on port 4000")
})