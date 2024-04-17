import prismaClient from "../../../prisma";

class ListMapLocalService {
  async execute() {
    const mapLocal = await prismaClient.mapLocal.findMany({
      select: {
        id: true,
        title: true,
        photo: true,
        apiKey: true,
        lat: true,
        lng: true,
        info: true,
        mapId: true,
      },
    });
    return mapLocal;
  }
}

export { ListMapLocalService };