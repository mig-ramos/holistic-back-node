import { Request, Response } from "express";
import { UpdateMapLocalService } from "../../../services/home/map-local/UpdateMapLocalService";

class UpdateMapLocalController {
  async handle(req: Request, res: Response) {

    const id = req.params.id;
    //  console.log( `O parâmetro é: ${ id }` )

    const { title, photo, apiKey, lat, lng, info, mapId } = req.body;

    // console.log(req.body)

    const updateMapLocalService = new UpdateMapLocalService()

    const mapLocal = await updateMapLocalService.execute({
      id,
      title,
      photo,
      apiKey,
      lat,
      lng,
      info,
      mapId,
    })

    return res.json(mapLocal);
  }
}

export { UpdateMapLocalController }