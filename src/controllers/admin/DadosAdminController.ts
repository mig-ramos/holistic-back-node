import { Request, Response } from "express";
import { DadosAdminService } from "../../services/admin/DadosAdminService";

class DadosAdminController{
    async handle(req: Request, res: Response){

       const id = req.params.id
     //  console.log( `O parâmetro é: ${ id }` )

        const dadosAdminService = new DadosAdminService()

        const admin = await dadosAdminService.execute({
            id
        })

        return res.json(admin);
    }
}

export { DadosAdminController }