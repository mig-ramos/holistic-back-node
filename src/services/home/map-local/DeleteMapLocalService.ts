import prismaClient from "../../../prisma";


interface MapLocalRequest {
  id: string;
}

class DeleteMapLocalService {
  async execute({ id }: MapLocalRequest) {
    if (id === "") {
      throw new Error("Map Local inválido");
    }

    let verifyMapLocal = await prismaClient.mapLocal.findFirst({
      where: {
        id: id,
      },
      select: {
        photo: true,
      }
    });

    const { unlink } = require('node:fs');

    if (!verifyMapLocal) {
      throw new Error("Foto não encontrada...");
    } else {

      unlink(`imgs/${verifyMapLocal.photo}`, (err) => {
        if (err) throw new Error('Erro ao excluir Foto...')
      });

      const bookTherapy = await prismaClient.mapLocal.delete({
        where: {
          id: id
        }
      })
    }

    return { message: "Map Local deletado com sucesso" }
  }
}

export { DeleteMapLocalService };