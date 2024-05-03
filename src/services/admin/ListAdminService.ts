import prismaClient from "../../prisma";

class ListAdminService {
  async execute() {
    const user = await prismaClient.user.findMany({
      where:{
        role: "ADMIN",
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

export { ListAdminService };
