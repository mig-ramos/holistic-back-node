import prismaClient from "../../prisma";

interface ClientRequest {
  id: string;
}

class DadosClientService {
  async execute({ id }: ClientRequest) {
    if (id === "") {
      throw new Error("Pesquisa inválida");
    }

    let client = await prismaClient.client.findFirst({
      where: {
        id: id,
      },
      select: {
        id: true,
        birthday: true,
      },
    });

    if(!client){
        throw new Error("Cliente não encontrado(a)...");
    }   

    return client;
  }
}

export { DadosClientService };