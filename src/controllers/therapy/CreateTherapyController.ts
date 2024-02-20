import { Request, Response } from "express";
import { CreateTherapyService } from "../../services/therapy/CreateTherapyService";

class CreateTherapyController{
    async handle(req: Request, res: Response){

        const { name, description } = req.body;

        const createTherapyService = new CreateTherapyService()

        const therapy = await createTherapyService.execute({
            name,
            description
        })

        return res.json(therapy);
    }
}

export { CreateTherapyController }