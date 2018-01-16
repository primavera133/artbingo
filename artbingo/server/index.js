const next = require('next')
const express = require('express')
const pages = require('./pages')
const api = require('./api')

exports.start = (app) => {
  const server = express()
  const handle = app.getRequestHandler()

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

  pages.register(server, app)
  api.register(server)

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
}