import prismaClient from "../../prisma";

interface TherapyRequest {
  id: string;
  name: string;
  description: string;
  photo: string;
}

class UpdateTherapyService {
  async execute({ id, name, description, photo }: TherapyRequest) {
    if (name === '' || description === '' || photo === '') {
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
        photo: true,
      },
    });

    if (!therapy) {
      throw new Error("Terapia não encontrada...");
    } else {
      therapy = await prismaClient.therapy.update({
        where: {
          id: id
        },
        data: {
          name: name,
          description: description,
          photo: photo,
        },
        select: {
          id: true,
          name: true,
          description: true,
          photo: true,
        }
      })
    }

    return therapy;
  }
}

export { UpdateTherapyService };
