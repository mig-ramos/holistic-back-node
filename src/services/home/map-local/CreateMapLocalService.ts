import prismaClient from "../../../prisma";

interface MapLocalRequest {
    title: string,
    photo?: string,
    apiKey?: string,
    lat?: string,
    lng?: string;
    info?: string;
}

class CreateMapLocalService {
    async execute({ title, photo, apiKey, lat, lng, info
    }: MapLocalRequest) {
        const mapLocal = await prismaClient.mapLocal.create({
            data: {
                title: title,
                photo: photo,
                apiKey: apiKey,
                lat: lat,
                lng: lng,
                info: info,
            },
            select: {
                id: true,
                title: true,
                photo: true,
                apiKey: true,
                lat: true,
                lng: true,
                info: true,
            }
        })
        return mapLocal;
        // return {ok: true};
    }
}

export { CreateMapLocalService }