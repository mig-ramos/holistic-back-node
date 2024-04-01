import prismaClient from "../../../prisma";


interface AboutRequest {
  id: string;
}

class DeleteAboutService {
  async execute({ id }: AboutRequest) {
    if (id === "") {
      throw new Error("Sobre-mim inválido");
    }

    let verifyAbout = await prismaClient.about.findFirst({
      where: {
        id: id,
      },
      select: {
        photo: true,
      }
    });

    const { unlink } = require('node:fs');

    if (!verifyAbout) {
      throw new Error("Foto não encontrada...");
    } else {

      unlink(`imgs/${verifyAbout.photo}`, (err) => {
        if (err) throw new Error('Erro ao excluir Foto...')
      });

      const about = await prismaClient.about.delete({
        where: {
          id: id
        }
      })
    }

    return { message: "Sobre-mim deletado com sucesso" }
  }
}

export { DeleteAboutService };