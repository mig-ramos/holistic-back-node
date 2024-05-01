import { Prisma, PrismaClient, Role } from "@prisma/client";
import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface UserRequest {
  id: string;
  name: string;
  email: string;
  role: Role;
  password: string;
}



class UpdateUserService {
  async execute({ id, name, email, role, password }: UserRequest) {

    let papel = role;

    if (name === '' || email === '' || password === '') {
      throw new Error("Preencha os Campos")
    }

    let user = await prismaClient.user.findFirst({
      where: {
        id: id,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        active: true,
      },
    });



    const passwordHash = await hash(password, 8);

    if (!user) {
      throw new Error("Usuário não encontrada...");
    } else {
      // console.log(user.role, role)

      user = await prismaClient.user.update({
        where: {
          id: id
        },
        data: {
          name: name,
          email: email,
          role: role,
          password: passwordHash,
        },
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
          active: true,
        }
      })
    }

    deletarTabela(papel);



    if (papel === user.role && user.role === "CLIENT") {
      const response = await prismaClient.client.count({
        where: {
          id: user.id,
        }
      })
      if (response === 0) {
        await prismaClient.client.create({
          data: {
            id: user.id,
          }
        })
      }
    }

    if (papel === user.role && user.role === "THERAPIST") {
      const response = await prismaClient.therapist.count({
        where: {
          id: user.id,
        }
      })
      if (response === 0) {
        await prismaClient.therapist.create({
          data: {
            id: user.id,
          }
        })
      }
    }

    if (papel === user.role && user.role === "ADMIN") {
      const response = await prismaClient.admin.count({
        where: {
          id: user.id,
        }
      })
      if (response === 0) {
        await prismaClient.admin.create({
          data: {
            id: user.id,
          }
        })
      }
    }
    async function deletarTabela(papel: any) {
      if (user.role === "CLIENT" || user.role === "THERAPIST" && papel === "ADMIN") {

        const response = await prismaClient.admin.count({
          where: {
            id: user.id,
          }
        })

        if (response > 0) {
          await prismaClient.admin.delete({
            where: {
              id: user.id,
            }
          })
        }
      }

      if (user.role === "CLIENT" || user.role === "ADMIN" && papel === "THERAPIST") {
        const response = await prismaClient.therapist.count({
          where: {
            id: user.id,
          }
        })
        if (response > 0) {
          await prismaClient.therapist.delete({
            where: {
              id: user.id,
            }
          })
        }
      }

      if (user.role === "THERAPIST" || user.role === "ADMIN" && papel === "CLIENT") {
        const response = await prismaClient.client.count({
          where: {
            id: user.id,
          }
        })
        if (response > 0) {
          await prismaClient.client.delete({
            where: {
              id: user.id,
            }
          })
        }
      }
    }

    return user;
  }

}

export { UpdateUserService };
