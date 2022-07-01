const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


const coordinate = prisma.coordinate.upsert({
  where: { id: 1 },
  update: {},
  create: {
    latitude: '53.7148275',
    longitude: '91.4231496',
    name: 'ул. Пушкина, 205, Абакан, Респ. Хакасия, Россия, 655004',
  },
})


const promises = [
  coordinate
]

async function main() {
  try { 
    const result = await Promise.all(promises)
    console.log('🌱 Seed data:', result)
    
   } catch (e) {
    console.error(e)
    process.exit(1)
  }

  await prisma.$disconnect()
  process.exit()

}

main()