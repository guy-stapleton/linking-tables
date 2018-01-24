var server = require('./server')

var PORT = process.env.PORT || 3000



var knex = require('knex')
//get the config info from the knexfile in there
var config = require('./knexfile').development
//Start up the knex database with the config
var db = knex(config)



var app = server(db)


app.listen(PORT, () => {
  console.log(`Server runing on port ${PORT}`)
})
