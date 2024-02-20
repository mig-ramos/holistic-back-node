import prismaClient from "../../prisma";

interface AdminRequest {
  id: string;
}

class DadosAdminService {
  async execute({ id }: AdminRequest) {
    if (id === "") {
      throw new Error("Pesquisa inválida");
    }

    let admin = await prismaClient.admin.findFirst({
      where: {
        id: id,
      },
      select: {
        id: true,
        typeAdmin: true,
      },
    });

    if(!admin){
        throw new Error("Administrador não encontrado...");
    }   

    return admin;
  }
}

export { DadosAdminService };