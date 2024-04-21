import { Request, Response } from "express";
import { DeleteCompanyService } from "../../../services/home/company/DeleteCompanyService";

class DeleteCompanyController {
  async handle(req: Request, res: Response) {

    const id = req.params.id
    //  console.log( `O parâmetro é: ${ id }` )

    const deleteCompanyService = new DeleteCompanyService()

    const company = await deleteCompanyService.execute({
      id
    })

    return res.json(company);
  }
}

export { DeleteCompanyController }