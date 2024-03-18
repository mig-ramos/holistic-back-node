import prismaClient from "../../../prisma";

class ListAboutService {
  async execute() {
    const about = await prismaClient.about.findMany({
      select: {
        id: true,
        title: true,
        subTitle: true,
        description: true,
        photo: true,
      },
    });
    return about;
  }
}

export { ListAboutService };