import prismaClient from "../../prisma";

interface TherapyRequest {
    name: string;
    description?: string;
    photo?: string;
}

class CreateTherapyService {
    async execute({ name, description, photo }: TherapyRequest) {
        if (name === '') {
            throw new Error('Terapia inválida')
        }

        const therapy = await prismaClient.therapy.create({
            data: {
                name: name,
                description: description,
                photo: photo,
            },
            select: {
                id: true,
                name: true,
                description: true,
                photo: true,
            }
        })

        return therapy;
    }
}

export { CreateTherapyService }