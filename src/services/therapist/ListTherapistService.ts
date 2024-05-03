import prismaClient from "../../prisma";

class ListTherapistService {
  async execute() {
    const user = await prismaClient.user.findMany({
      where:{
        role: "THERAPIST",
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

export { ListTherapistService };
