import prismaClient from "../../prisma";

class ListBannerService {
  async execute() {
    const banner = await prismaClient.slide.findMany({
      select: {
        id: true,
        slide: true,
      },
    });
    return banner;
  }
}

export { ListBannerService };
