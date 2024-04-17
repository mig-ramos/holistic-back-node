import { Request, Response } from "express";
import { ListMapLocalService } from "../../../services/home/map-local/ListMapLocalService"; 

class ListMapLocalController {
    async handle(req: Request, res: Response) {
        const listMapLocalService = new ListMapLocalService();
        const mapLocal = await listMapLocalService.execute();

        return res.json(mapLocal);
    }
}

export { ListMapLocalController }