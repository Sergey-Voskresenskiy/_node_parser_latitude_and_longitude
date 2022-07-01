import CoordinateService from '../service/CoordinateService'

class CoordinateController {
  async all(_, res) {
    try {
      res.json(await CoordinateService.all())
    } catch (e) {
      logger(e)
      res.status(500).json(e)
    }
  }
}

export default new CoordinateController()
