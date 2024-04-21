import prismaClient from "../../../prisma";

interface CompanyRequest {
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

class CreateCompanyService {
    async execute({
        companyName, description, companyAddress, officeOur, photo, zap, email, instagram, twitter, facebook, youtube
    }: CompanyRequest) {
        const company = await prismaClient.companySetup.create({
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
                companyName: true,
                description: true,
                companyAddress: true,
                officeOur: true,
                photo: true,
                zap: true,
                email: true,
                instagram: true,
                twitter: true,
                facebook: true,
                youtube: true,
            }
        })
        return company;
        // return {ok: true};
    }
}

export { CreateCompanyService }