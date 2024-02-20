import prismaClient from "../../prisma";

class ListNoActiveUserService {
    async execute() {
        const user = await prismaClient.user.findMany({
            where: {
                active: false,
            },
            select: {
                id: true,
                name: true,
                email: true,
                role: true,
                active: true,
            },
        });
        return user;
    }
}

export { ListNoActiveUserService };
