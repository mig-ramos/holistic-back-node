import prismaClient from "../../prisma";

interface AboutRequest {
    title: string,
    subTitle: string,
    description: string,
    photo: string,
}

class CreateAboutService {
    async execute({
        title, subTitle, description, photo
    }: AboutRequest) {
        const about = await prismaClient.about.create({
            data: {
                title: title,
                subTitle: subTitle,
                description: description,
                photo: photo,
            },
            select: {
                id: true,
                title: true,
                subTitle: true,
                description: true,
                photo: true,
            }
        })
        return about;
        // return {ok: true};
    }
}

export { CreateAboutService }