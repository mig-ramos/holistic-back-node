import prismaClient from "../../../prisma";


interface SlideRequest {
  id: string;
}

class DeleteSlideService {
  async execute({ id }: SlideRequest) {
    if (id === "") {
      throw new Error("Slide inválido");
    }

    let verifySlides = await prismaClient.slide.findFirst({
      where: {
        id: id,
      },
      select: {
        name: true,
      }
    });

    const { unlink } = require('node:fs');

    if (!verifySlides) {
      throw new Error("Slide não encontrado...");
    } else {

      unlink(`imgs/${verifySlides.name}`, (err) => {
        if (err) throw new Error('Erro ao excluir Foto...')
      });

      const slide = await prismaClient.slide.delete({
        where: {
          id: id
        }
      })
    }

    return { message: "Slide deletado com sucesso" }
  }
}

export { DeleteSlideService };