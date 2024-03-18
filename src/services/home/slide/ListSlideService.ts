import prismaClient from "../../../prisma";

class ListSlideService {
  async execute() {
    const slide = await prismaClient.slide.findMany({
      select: {
        id: true,
        slide: true,
      },
    });
    return slide;
  }
}

export { ListSlideService };
