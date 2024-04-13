import { Request, Response } from "express";
import { UpdateBookTherapyService } from "../../../services/home/book-therapy/UpdateBookTherapyService";

class UpdateBookTherapyController {
  async handle(req: Request, res: Response) {

    const id = req.params.id
    //  console.log( `O parâmetro é: ${ id }` )

    const { title, subTitle, buttonTitle, photo, description, mostrar } = req.body;

    const updateBookTherapyService = new UpdateBookTherapyService()

    const bookTherapy = await updateBookTherapyService.execute({
      id,
      title,
      subTitle,
      buttonTitle,
      photo,
      description,
      mostrar,
    })

    return res.json(bookTherapy);
  }
}

export { UpdateBookTherapyController }