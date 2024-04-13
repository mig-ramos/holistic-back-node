import { Request, Response } from "express";
import { ListBookTherapyService } from "../../../services/home/book-therapy/ListBookTherapyService";

class ListBookTherapyController{
    async handle(req: Request, res: Response){
        const listBookTherapyService = new ListBookTherapyService();
        const bookTherapy = await listBookTherapyService.execute();

        return res.json(bookTherapy);
    }
}

export { ListBookTherapyController }