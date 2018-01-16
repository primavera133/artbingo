require('es6-promise').polyfill();
require('isomorphic-fetch');
const express = require('./server/index');
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})

app.prepare()
  .then(express.start(app))
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })