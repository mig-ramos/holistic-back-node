import { Request, Response } from "express";
import { CreateTherapyService } from "../../services/therapy/CreateTherapyService";

class CreateTherapyController {
    async handle(req: Request, res: Response) {

        const { name, description } = req.body;

        const createTherapyService = new CreateTherapyService()

        if (!req.file) {
            throw new Error("Error upload file");
        } else {
            const { originalname, filename: photo } = req.file;

            const therapy = await createTherapyService.execute({
                name,
                description,
                photo,
            })
            return res.json(therapy);
        }
    }
}

export { CreateTherapyController }