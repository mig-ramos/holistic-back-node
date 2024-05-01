import prismaClient from "../../prisma";

interface UserRequest {
  id: string;
}

class DeleteUserService {
  async execute({ id }: UserRequest) {
    //  console.log( `O parâmetro é: ${ id }` )
    if (id === "") {
      throw new Error("Pesquisa inválida");
    }

    const verifyUser = await prismaClient.user.findFirst({
      where: {
        id: id,
      },
      select: {
        id: true,
        role: true,
      }
    });

    if (!verifyUser) {
      throw new Error("Usuário não encontrado.");
    } else {

      const client = await prismaClient.client.findFirst({
        where: {
          id: id,
        }
      })
      if (client) {
        await prismaClient.client.delete({
          where: {
            id: id,
          }
        })
      }
      const therapist = await prismaClient.therapist.findFirst({
        where: {
          id: id,
        }
      })
      if (therapist) {
        await prismaClient.therapist.delete({
          where: {
            id: id,
          }
        })
      }
      const admin = await prismaClient.admin.findFirst({
        where: {
          id: id,
        }
      })
      if (admin) {
        await prismaClient.admin.delete({
          where: {
            id: id,
          }
        })
      }

      const users = await prismaClient.user.delete({
        where: {
          id: id,
        },
      });

      return { message: "Usuário deletado com sucesso" }
    }
  }
}

export { DeleteUserService };
