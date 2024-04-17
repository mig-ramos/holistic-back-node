import prismaClient from "../../../prisma";

interface MapLocalRequest {
  id: string;
  title: string;
  photo: string;
  apiKey: string;
  lat: string;
  lng: string;
  info: string;
  mapId: string;
}

class UpdateMapLocalService {
  async execute({ id, title, photo, apiKey, lat, lng, info, mapId }: MapLocalRequest) {

    // console.log(id, title, photo, apiKey, lat, lng, info, mapId);

    let mapPhoto = title === "" || photo === "";
    let mapGoogle = title === "" || apiKey === "" || lat === "" || lng === "" || info === "" || mapId;
    if (!mapPhoto && !mapGoogle) {
      throw new Error("Map Local inválido");
    }

    let mapLocal = await prismaClient.mapLocal.findFirst({
      where: {
        id: id,
      },
      select: {
        id: true,
      },
    });

    if (!mapLocal) {
      throw new Error("Map Local não encontrado...");
    } else {
      mapLocal = await prismaClient.mapLocal.update({
        where: {
          id: id
        },
        data: {
          title: title,
          photo: photo,
          apiKey: apiKey,
          lat: lat,
          lng: lng,
          info: info,
          mapId: mapId,
        },
        select: {
          id: true,
          title: true,
          photo: true,
          apiKey: true,
          lat: true,
          lng: true,
          info: true,
          mapId: true,
        }
      })
    }

    return mapLocal;
    //  return {id: id, hour: hour}
  }
}

export { UpdateMapLocalService };