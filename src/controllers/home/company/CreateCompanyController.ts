import { Request, Response } from "express";
import { CreateCompanyService } from "../../../services/home/company/CreateCompanyService";

class CreateCompanyController {
    async handle(req: Request, res: Response) {

        const { companyName, description, companyAddress, officeOur, zap, email, instagram, twitter, facebook, youtube } = req.body;

        const createCompanyService = new CreateCompanyService();

        if (!req.file) {
            throw new Error("Error upload file");
        } else {
            // Renomeando o filename para slide
            const { originalname, filename: photo } = req.file;

            const company = await createCompanyService.execute({
                companyName,
                description,
                companyAddress,
                officeOur,
                photo,
                zap,
                email,
                instagram,
                twitter,
                facebook,
                youtube,
            }

            );

            return res.json(company)
        }

    }
}

export { CreateCompanyController };