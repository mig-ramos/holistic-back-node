import { Request, Response } from "express";
import { UpdateCompanyService } from "../../../services/home/company/UpdateCompanyService";

class UpdateCompanyController {
  async handle(req: Request, res: Response) {

    const id = req.params.id
    //  console.log( `O parâmetro é: ${ id }` )

    const { companyName, description, companyAddress, officeOur, photo, zap, email, instagram, twitter, facebook, youtube } = req.body;

    const updateCompanyService = new UpdateCompanyService()

    const company = await updateCompanyService.execute({
      id,
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
    })

    return res.json(company);
  }
}

export { UpdateCompanyController }