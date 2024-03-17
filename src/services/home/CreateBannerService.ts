import prismaClient from "../../prisma";

interface BannerRequest {
    slide: string;
}

class CreateBannerService {
    async execute({
        slide,
    }: BannerRequest) {
        const pathBanner = await prismaClient.slide.create({
            data: {
                slide: slide,
            }
        })
        return pathBanner;
        // return {ok: true};
    }
}

export { CreateBannerService }
