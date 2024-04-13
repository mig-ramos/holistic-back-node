import prismaClient from "../../../prisma";


interface BookTherapyRequest {
  id: string;
}

class DeleteBookTherapyService {
  async execute({ id }: BookTherapyRequest) {
    if (id === "") {
      throw new Error("Book Therapy inválido");
    }

    let verifyBookTherapy = await prismaClient.bookTheraapies.findFirst({
      where: {
        id: id,
      },
      select: {
        photo: true,
      }
    });

    const { unlink } = require('node:fs');

    if (!verifyBookTherapy) {
      throw new Error("Foto não encontrada...");
    } else {

      unlink(`imgs/${verifyBookTherapy.photo}`, (err) => {
        if (err) throw new Error('Erro ao excluir Foto...')
      });

      const bookTherapy = await prismaClient.bookTheraapies.delete({
        where: {
          id: id
        }
      })
    }

    return { message: "Book Therapy deletado com sucesso" }
  }
}

export { DeleteBookTherapyService };