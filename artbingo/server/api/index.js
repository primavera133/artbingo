exports.register = (server) => {
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


}