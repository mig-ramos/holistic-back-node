import prismaClient from "../../../prisma";

interface SlideRequest {
    name: string;
    slogan: string;
}

class CreateSlideService {
    async execute({
        name, slogan
    }: SlideRequest) {
        const nomeSlide = await prismaClient.slide.create({
            data: {
                name: name,
                slogan: slogan,
            }
        })
        return nomeSlide;
        // return {ok: true};
    }
}

export { CreateSlideService }
