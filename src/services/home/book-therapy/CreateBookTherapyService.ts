import prismaClient from "../../../prisma";

interface BookTherapyRequest {
    title: string,
    subTitle: string,
    buttonTitle: string,
    photo: string,
    description?: string;
    mostrar?: string;
}

class CreateBookTherapyService {
    async execute({
        title, subTitle, buttonTitle, photo, description, mostrar
    }: BookTherapyRequest) {
        const bookTherapy = await prismaClient.bookTheraapies.create({
            data: {
                title: title,
                subTitle: subTitle,
                buttonTitle: buttonTitle,
                photo: photo,
                description: description,
                mostrar: mostrar,
            },
            select: {
                id: true,
                title: true,
                subTitle: true,
                buttonTitle: true,
                photo: true,
                description: true,
                mostrar: true,
            }
        })
        return bookTherapy;
        // return {ok: true};
    }
}

export { CreateBookTherapyService }