import { Request, Response } from "express";
import { DeleteBookTherapyService } from "../../../services/home/book-therapy/DeleteBookTherapyService";

class DeleteBookTherapyController {
  async handle(req: Request, res: Response) {

    const id = req.params.id
    //  console.log( `O parâmetro é: ${ id }` )

    const deleteBookTherapyService = new DeleteBookTherapyService()

    const bookTherapy = await deleteBookTherapyService.execute({
      id
    })

    return res.json(bookTherapy);
  }
}

export { DeleteBookTherapyController }