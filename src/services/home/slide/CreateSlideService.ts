import prismaClient from "../../../prisma";

interface SlideRequest {
    slide: string;
}

class CreateSlideService {
    async execute({
        slide,
    }: SlideRequest) {
        const nomeSlide = await prismaClient.slide.create({
            data: {
                slide: slide,
            }
        })
        return nomeSlide;
        // return {ok: true};
    }
}

export { CreateSlideService }
