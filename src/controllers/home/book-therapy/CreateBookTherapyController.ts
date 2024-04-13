import { Request, Response } from "express";
import { CreateBookTherapyService } from "../../../services/home/book-therapy/CreateBookTherapyService";

class CreateBookTherapyController {
    async handle(req: Request, res: Response) {

        const { title, subTitle, buttonTitle, description, mostrar } = req.body;

        const createBookTherapyService = new CreateBookTherapyService();

        if (!req.file) {
            throw new Error("Error upload file");
        } else {
            // Renomeando o filename para slide
            const { originalname, filename: photo } = req.file;

            const bookTherapy = await createBookTherapyService.execute({
                title,
                subTitle,
                buttonTitle,
                photo,
                description,
                mostrar,
            }

            );

            return res.json(bookTherapy)
        }

    }
}

export { CreateBookTherapyController };