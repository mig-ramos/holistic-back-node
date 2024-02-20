import { Request, Response } from "express";
import { DadosTherapistService } from "../../services/therapist/DadosTherapistService";

class DadosClientController{
    async handle(req: Request, res: Response){

       const id = req.params.id
     //  console.log( `O parâmetro é: ${ id }` )

        const dadoTherapistController = new DadosTherapistService()

        const therapist = await dadoTherapistController.execute({
            id
        })

        return res.json(therapist);
    }
}

export { DadosClientController }