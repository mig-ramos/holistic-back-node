import prismaClient from "../../prisma";

interface TherapyRequest {
  id: string;
}

class DeleteTherapyService {
  async execute({ id }: TherapyRequest) {
    if (id === "") {
      throw new Error("Pesquisa inválida");
    }

    const verifyTherapy = await prismaClient.therapy.findFirst({
      where: {
        id: id,
      }
    });

    if (!verifyTherapy) {
      throw new Error("Therapia não encontrada.");
    } else {
      const therapy = await prismaClient.therapy.delete({
        where: {
          id: id,
        },
      });

      return {message: "Terapia deletada com sucesso"}
    }
  }
}

export { DeleteTherapyService };
