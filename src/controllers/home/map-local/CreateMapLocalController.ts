import { Request, Response } from "express";
import { CreateMapLocalService } from "../../../services/home/map-local/CreateMapLocalService";

class CreateMapLocalController {
    async handle(req: Request, res: Response) {

        const { title, apiKey, lat, lng, info } = req.body;

        const createMapLocalService = new CreateMapLocalService();

        if (!req.file) {
            throw new Error("Error upload file");
        } else {
            // Renomeando o filename para slide
            const { originalname, filename: photo } = req.file;

            const mapLocal = await createMapLocalService.execute({
                title,
                photo,
                apiKey,
                lat,
                lng,
                info,
            }

            );

            return res.json(mapLocal)
        }

    }
}

export { CreateMapLocalController };