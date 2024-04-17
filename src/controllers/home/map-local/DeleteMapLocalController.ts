import { Request, Response } from "express";
import { DeleteMapLocalService } from "../../../services/home/map-local/DeleteMapLocalService";

class DeleteMapLocalController {
  async handle(req: Request, res: Response) {

    const id = req.params.id
    //  console.log( `O parâmetro é: ${ id }` )

    const deleteMapLocalService = new DeleteMapLocalService()

    const mapLocal = await deleteMapLocalService.execute({
      id
    })

    return res.json(mapLocal);
  }
}

export { DeleteMapLocalController }