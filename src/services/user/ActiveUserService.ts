import prismaClient from "../../prisma";

interface UserRequest {
  id: string;
}

class ActiveUserService {
  async execute({ id }: UserRequest) {
    if (id === "") {
      throw new Error("Pesquisa inválida");
    }

    const verifyUser = await prismaClient.user.findFirst({
      where: {
        id: id,
      },
      select: {
        active: true,
      }
    });

    if (!verifyUser) {
      throw new Error("Usuário não encontrado.");
    } else {
      const users = await prismaClient.user.update({
        where: {
          id: id,
        },
        data: {
          active: "S",
        }
      });

      return { message: "Usuário ativado com sucesso" }
    }
  }
}

export { ActiveUserService }