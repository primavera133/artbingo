# NodeJS Server setup for ES6-modules, HapiJS, Mocha

## Node version
I use node v8.9.1 (Latest LTS at the time of writing)
I use [`n`](https://www.npmjs.com/package/n) for easy switching between node versions. [`nvm`](https://github.com/creationix/nvm) is also doing the same thing

## Nodemon
[`Nodemon`](https://www.npmjs.com/package/nodemon) is watching and restarting node

## Babel
Importing ES6-modules in node is not a simple task ([here's why](https://nodejs.org/en/docs/es6/)). Instead we use Babel to transpile.

## HapiJs
I use [`hapi`](https://www.npmjs.com/package/hapi) server in this setup. 

## Test
Testing is done with [`mocha`](https://www.npmjs.com/package/mocha)

## Scripts
### yarn run start 
Start a dev server

### yarn run build
Transpile to the /dist folder.

### yarn run serve
Run transpiled code in node

### yarn run test
Run tests
 