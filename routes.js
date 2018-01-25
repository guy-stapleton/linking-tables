var express = require('express')
var server = require('./server')

var routes = express.Router()

routes.get('/', (req, res) => {
  res.redirect('/home')
})

routes.get('/home', (req, res) => {
  var db = req.app.get('db')
  db('albums')
    .join('artists', 'albums.artist_id', 'artists.artist_id')
    .select('albums.album_title', 'artists.artist_name', 'albums.release_year')
    .then((albums) => {
      console.log(albums)
      res.render('index', {albums})
    })
})


routes.get('/add', (req, res) => {
  res.render('add-album', {})
})

routes.post('/add', (req, res) => {
  var db = req.app.get('db')
  var currentAlbum = req.body
  var details = req.body
  db('artists')
    .insert({artist_name: details.artist})
    .then((artist_id) => {
      db('albums')
        .insert({album_title: details.album, artist_id: artist_id[0], release_year: details.releaseYear})
        .then((artist_id) => {
          res.render('success', currentAlbum)
        })
    })
    .catch((err) => {
      res.send('Oh no, we can\'t add that album ' + err.message)
    })
})

module.exports = routes
