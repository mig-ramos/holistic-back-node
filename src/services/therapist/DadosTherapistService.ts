import prismaClient from "../../prisma";

interface TherapistRequest {
  id: string;
}

class DadosTherapistService {
  async execute({ id }: TherapistRequest) {
    if (id === "") {
      throw new Error("Pesquisa inválida");
    }

    let therapist = await prismaClient.therapist.findFirst({
      where: {
        id: id,
      },
      select: {
        id: true,
        therapy: true,
      },
    });

    if(!therapist){
        throw new Error("Terapeuta não encontrado(a)...");
    }   

    return therapist;
  }
}

export { DadosTherapistService };