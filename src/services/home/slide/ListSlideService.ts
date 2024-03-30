import prismaClient from "../../../prisma";

class ListSlideService {
  async execute() {
    const slide = await prismaClient.slide.findMany({
      select: {
        id: true,
        name: true,
        slogan: true,
      },
    });
    return slide;
  }
}

export { ListSlideService };
