import prismaClient from "../../prisma";

class ListActiveUserService {
  async execute() {
    const user = await prismaClient.user.findMany({
        where: {
            active: "S",
        },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        active: true,
      },
    });
    return user;
  }
}

export { ListActiveUserService };
