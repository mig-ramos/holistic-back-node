import prismaClient from "../../prisma";

interface TherapyRequest {
  id: string;
  name: string;
  description: string;
}

class UpdateTherapyService {
  async execute({ id, name, description }: TherapyRequest) {
    if (name === '' || description === '') {
      throw new Error("Preencha os Campos");
    }

    let therapy = await prismaClient.therapy.findFirst({
      where: {
        id: id,
      },
      select: {
        id: true,
        name: true,
        description: true,
      },
    });

    if(!therapy){
        throw new Error("Terapia não encontrada...");
    } else {
        therapy = await prismaClient.therapy.update({
            where:{
                id: id
            },
            data:{
                name: name,
                description: description,
            },
            select:{
                id: true,
                name: true,
                description: true,
            }
        })
    } 

    return therapy;
    //  return {id: id, hour: hour}
  }
}

export { UpdateTherapyService };
