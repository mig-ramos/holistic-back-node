import prismaClient from "../../../prisma";

interface AboutRequest {
  id: string;
  title: string;
  subTitle: string;
  description: string;
  photo: string;
}

class UpdateAboutService {
  async execute({ id, title, subTitle, description, photo }: AboutRequest) {
    if (title === "" || subTitle === "" || description === "" || photo === "") {
      throw new Error("Sobre-mim inválido");
    }

    let abouts = await prismaClient.about.findFirst({
      where: {
        id: id,
      },
      select: {
        id: true,
      },
    });

    if(!abouts){
        throw new Error("Sobre-mim não encontrado...");
    } else {
      abouts = await prismaClient.about.update({
            where:{
                id: id
            },
            data:{
                title: title,
                subTitle: subTitle,
                description: description,
                photo: photo,
            },
            select:{
                id: true,
                title: true,
                subTitle: true,
                description: true,
                photo: true,
            }
        })
    } 

    return abouts;
    //  return {id: id, hour: hour}
  }
}

export { UpdateAboutService };