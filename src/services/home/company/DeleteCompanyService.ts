import prismaClient from "../../../prisma";


interface CompanyRequest {
  id: string;
}

class DeleteCompanyService {
  async execute({ id }: CompanyRequest) {
    if (id === "") {
      throw new Error("Empresa inválida");
    }

    let verifyCompany = await prismaClient.companySetup.findFirst({
      where: {
        id: id,
      },
      select: {
        photo: true,
      }
    });

    const { unlink } = require('node:fs');

    if (!verifyCompany) {
      throw new Error("Foto não encontrada...");
    } else {

      unlink(`imgs/${verifyCompany.photo}`, (err) => {
        if (err) throw new Error('Erro ao excluir Foto...')
      });

      const company = await prismaClient.companySetup.delete({
        where: {
          id: id
        }
      })
    }

    return { message: "Empresa deletada com sucesso" }
  }
}

export { DeleteCompanyService };