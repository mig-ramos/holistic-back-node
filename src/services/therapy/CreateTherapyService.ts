import prismaClient from "../../prisma";

interface TherapyRequest{
    name: string;
    description?: string;
}

class CreateTherapyService{
    async execute({ name, description }: TherapyRequest){
        if(name === ''){
            throw new Error('Terapia inválida')
        }

        const therapy = await prismaClient.therapy.create({
            data:{
                name: name,
                description: description
            },
            select:{
                id: true,
                name: true,
                description: true,
            }
    })

    return therapy;
}
}

export { CreateTherapyService }