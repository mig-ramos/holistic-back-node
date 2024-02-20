import { Request, Response } from "express";
import { DadosClientService } from "../../services/user/DadosClientService";

class DadosClientController{
    async handle(req: Request, res: Response){

       const id = req.params.id
     //  console.log( `O parâmetro é: ${ id }` )

        const dadoClientController = new DadosClientService()

        const client = await dadoClientController.execute({
            id
        })

        return res.json(client);
    }
}

export { DadosClientController }