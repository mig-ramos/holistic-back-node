import prismaClient from "../../prisma";

interface RestrictionRequest {
  id: string;
  restrictionHour: string;
}

class UpdateRestrictionDateService {

  async execute({ id, restrictionHour }: RestrictionRequest) {


    const existHour = await prismaClient.hour.findFirst({
      where: {
        hour: restrictionHour,
      },
      select: {
        id: true,
        hour: true,
      },
    });

    if (restrictionHour === "" || existHour === null) {
      throw new Error("Restrição inválida.");
    }

    const restriction = await prismaClient.restrictionDate.findFirst({
      where: {
        id: id,
      },
      select: {
        id: true,
        user: {
          select: {
            id: true,
            name: true,
            role: true,
          },
        },
        date: true,
        restrictionHour: true,
      },
    });

    if (!restriction) {
      throw new Error("A restrição não existe.");
    }

    const regHour = await prismaClient.restrictionHour.findFirst({
      where: {
        restrictionDate_id: id,
      },
      select: {
        id: true,
      }
    })

    const upHour = await prismaClient.restrictionHour.update({
      where: {
        id: regHour.id,
      },
      data: {
        hour: restrictionHour,
      },
      select: {
        id: true,
        hour: true,
        restrictionDate: true,

      }
    })

    return { restriction, upHour }

  }
}

export { UpdateRestrictionDateService };
