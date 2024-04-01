import { Request, Response } from "express";
import { UpdateAboutService } from "../../../services/home/about/UpdateAboutService";

class UpdateAboutController {
  async handle(req: Request, res: Response) {

    const id = req.params.id
    //  console.log( `O parâmetro é: ${ id }` )

    const { title, subTitle, description, photo } = req.body;

    const updateAboutService = new UpdateAboutService()

    const abouts = await updateAboutService.execute({
      id,
      title,
      subTitle,
      description,
      photo,
    })

    return res.json(abouts);
  }
}

export { UpdateAboutController }