import { Request, Response } from "express";
import { ListTherapistService } from "../../services/therapist/ListTherapistService"

class ListTherapistController{
    async handle(req: Request, res: Response){
        const listTherapistController = new ListTherapistService();
        const user = await listTherapistController.execute();

        return res.json(user);
    }
}

export { ListTherapistController }