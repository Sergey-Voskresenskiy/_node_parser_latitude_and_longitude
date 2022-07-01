import { prisma } from '../../prisma/'

class CoordinateService {
  async all() {
    return await prisma.coordinate.findMany({
      orderBy: {
        id: 'desc',
      },
    })
  }
}

export default new CoordinateService()
