var zoneRouter = require('express').Router();
var zoneController = require('../controller/zoneController');
var authMiddleware = require('../middleware/authMiddleware');

zoneRouter.route('/')
    .post(zoneController.createZone)
    .get(zoneController.getAllZones);

zoneRouter.route('/:id')
    .get(zoneController.getZoneById)
    .put(zoneController.updateZone)
    .delete(zoneController.deleteZone);

module.exports = zoneRouter;