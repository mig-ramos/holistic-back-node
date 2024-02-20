import { Role } from "@prisma/client";
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
  async execute({ id, name, email, role, password}: UserRequest) {

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

    return user;
  }
}

export { UpdateUserService };
