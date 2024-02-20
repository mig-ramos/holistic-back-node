import { Request, Response } from "express";
import { UpdateTherapyService } from "../../services/therapy/UpdateTherapyService";

class UpdateTherapyController{
    async handle(req: Request, res: Response){

       const id = req.params.id
     //  console.log( `O parâmetro é: ${ id }` )

        const { name, description } = req.body;

        const updateTherapyService = new UpdateTherapyService()

        const therapy = await updateTherapyService.execute({
            id,
          name,
          description
        })

        return res.json(therapy);
    }
}

export { UpdateTherapyController }