var express = require('express')
var server = require('./server')

var routes = express.Router()

routes.get('/', (req, res) => {
  res.redirect('/home')
})

routes.get('/home', (req, res) => {
  res.render('index', {greeting: 'Hello World'})
})


routes.get('/add', (req, res) => {
  res.render('add-album', {})
})

routes.post('/add', (req, res) => {
  var db = req.app.get('db')
  var details = req.body
  db('artists')
    .insert({artist_name: details.artist})
    .then((artist_id) => {
      console.log(artist_id)
      db('albums')
        .insert({album_title: details.album, artist_id: artist_id[0], release_year: details.releaseYear})
        .then((album_id) => {
          res.render('success', {artist_id})
        })
    })
})

module.exports = routes
