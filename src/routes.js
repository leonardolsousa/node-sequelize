const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json({ hello: 'Sequelize'})
})

module.exports = routes