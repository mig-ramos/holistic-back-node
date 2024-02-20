import prismaClient from "../../prisma";

class ListTherapyService {
  async execute() {
    const therapy = await prismaClient.therapy.findMany({
      select: {
        id: true,
        name: true,
        description: true,
      },
    });
    return therapy;
  }
}

export { ListTherapyService };
