import prismaClient from "../../prisma";

class ListNoActiveUserService {
    async execute() {
        const user = await prismaClient.user.findMany({
            where: {
                active: "N",
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
