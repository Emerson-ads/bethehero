const express = require ('express')
const OngController = require('../src/controllers/OngController')
const incidents = require ('./controllers/incidentsController')
const ProfileController = require ('./controllers/ProfileController')
const SessionsController = require('./controllers/SessionController')

routes = express.Router()

routes.post('/sessions', SessionsController.create)

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create)

routes.get('/profile', ProfileController.index)

routes.post('/incidents', incidents.create)
routes.get('/incidents', incidents.index)
routes.delete('/incidents/:id',incidents.delete )
module.exports = routes