import prismaClient from "../../../prisma";

class ListBookTherapyService {
  async execute() {
    const bookTherapy = await prismaClient.bookTheraapies.findMany({
      select: {
        id: true,
        title: true,
        subTitle: true,
        buttonTitle: true,
        photo: true,
        description: true,
        mostrar: true,
      },
    });
    return bookTherapy;
  }
}

export { ListBookTherapyService };