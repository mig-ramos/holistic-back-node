import prismaClient from "../../../prisma";

interface CompanyRequest {
  id: string,
  companyName?: string,
  description?: string,
  companyAddress?: string,
  officeOur?: string,
  photo?: string,
  zap?: string,
  email?: string,
  instagram?: string,
  twitter?: string,
  facebook?: string,
  youtube?: string,
}

class UpdateCompanyService {
  async execute({ id, companyName, description, companyAddress, officeOur, photo, zap, email, instagram, twitter, facebook, youtube }: CompanyRequest) {
    if (zap === "" || officeOur === "" || email === "") {
      throw new Error("Empresa inválida");
    }

    let company = await prismaClient.companySetup.findFirst({
      where: {
        id: id,
      },
      select: {
        id: true,
      },
    });

    if (!company) {
      throw new Error("Empresa não encontrada...");
    } else {
      company = await prismaClient.companySetup.update({
        where: {
          id: id
        },
        data: {
          companyName: companyName,
          description: description,
          companyAddress: companyAddress,
          officeOur: officeOur,
          photo: photo,
          zap: zap,
          email: email,
          instagram: instagram,
          twitter: twitter,
          facebook: facebook,
          youtube: youtube,
        },
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
        }
      })
    }

    return company;
    //  return {id: id, hour: hour}
  }
}

export { UpdateCompanyService };