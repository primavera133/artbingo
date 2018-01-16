exports.register = (server, app) => {
  server.get('/game/:id', (req, res) => {
    const actualPage = '/game'
    const queryParams = {id: req.params.id}
    app.render(req, res, actualPage, queryParams)
  })

}