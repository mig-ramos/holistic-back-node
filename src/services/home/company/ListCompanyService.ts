import prismaClient from "../../../prisma";

class ListCompanyService {
  async execute() {
    const company = await prismaClient.companySetup.findMany({
      select: {
        id: true,
        companyName: true,
        description: true,
        officeOur: true,
        companyAddress: true,
        photo: true,
        zap: true,
        email: true,
        instagram: true,
        twitter: true,
        facebook: true,
        youtube: true,
      },
    });
    return company;
  }
}

export { ListCompanyService };