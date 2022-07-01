import CoordinateController from '../controllers/CoordinateController'
const { Router } = require('express')

const router = Router()

router.get('/coordinate', CoordinateController.all)

module.exports = router
