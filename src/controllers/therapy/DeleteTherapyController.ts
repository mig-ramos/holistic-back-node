import { Request, Response } from "express";
import { DeleteTherapyService } from "../../services/therapy/DeleteTherapyService";

class DeleteTherapyController{
    async handle(req: Request, res: Response){

       const id = req.params.id
     //  console.log( `O parâmetro é: ${ id }` )

        const deleteTherapyService = new DeleteTherapyService()

        const therapy = await deleteTherapyService.execute({
            id
        })

        return res.json(therapy);
    }
}

export { DeleteTherapyController }