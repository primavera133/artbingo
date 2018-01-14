require('es6-promise').polyfill();
require('isomorphic-fetch');
const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()

    server.get('/api/species', (req, res) => {
      fetch('http://localhost:8000/species', {
        headers: {
          'Authorization': `Bearer ${process.env.AUTH_KEY}`
        }
      })
        .then(response => {
          return response.json()
        })
        .then(data => {
          res.send(data)
        })
    })

    server.get('/api/games', (req, res) => {
      fetch('http://localhost:8000/games', {
        headers: {
          'Authorization': `Bearer ${process.env.AUTH_KEY}`
        }
      })
        .then(response => {
          return response.json()
        })
        .then(data => {
          res.send(data)
        })
    })

    server.get('/api/game/:id', (req, res) => {
      fetch(`http://localhost:8000/game/${req.params.id}`, {
        headers: {
          'Authorization': `Bearer ${process.env.AUTH_KEY}`
        }
      })
        .then(response => {
          return response.json()
        })
        .then(data => {
          res.send(data)
        })
    })

    server.get('/game/:id', (req, res) => {
      const actualPage = '/game'
      const queryParams = {id: req.params.id}
      app.render(req, res, actualPage, queryParams)
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    const protocol = process.env.PROTOCOL || 'https';
    const domain = process.env.DOMAIN || 'localhost';
    const port = process.env.PORT || 3000;
    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on ${protocol}://${domain}:${port}`)
    })
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })