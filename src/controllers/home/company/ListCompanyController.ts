import { Request, Response } from "express";
import { ListCompanyService } from "../../../services/home/company/ListCompanyService";

class ListCompanyController {
    async handle(req: Request, res: Response) {
        const listCompanyService = new ListCompanyService();
        const company = await listCompanyService.execute();

        return res.json(company);
    }
}

export { ListCompanyController }