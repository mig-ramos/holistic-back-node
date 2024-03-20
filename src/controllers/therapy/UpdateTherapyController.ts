import { Request, Response } from "express";
import { UpdateTherapyService } from "../../services/therapy/UpdateTherapyService";

class UpdateTherapyController {
  async handle(req: Request, res: Response) {

    const updateTherapyService = new UpdateTherapyService()

    const id = req.params.id
     
    const { name, description } = req.body;    

    if (!req.file) {
      
      throw new Error("Error upload file");
    } else {
      const { originalname, filename: photo } = req.file;

      const therapy = await updateTherapyService.execute({
        id,
        name,
        description,
        photo,
      });

      return res.json(therapy);
    }
  }
}

export { UpdateTherapyController }