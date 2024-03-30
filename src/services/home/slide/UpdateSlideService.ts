import prismaClient from "../../../prisma";

interface SlideRequest {
  id: string;
  name: string;
  slogan: string;
}

class UpdateSlideService {
  async execute({ id, name, slogan }: SlideRequest) {
    if (name === "" || slogan === "") {
      throw new Error("Slide inválido");
    }

    let slides = await prismaClient.slide.findFirst({
      where: {
        id: id,
      },
      select: {
        id: true,
      },
    });

    if(!slides){
        throw new Error("Slide não encontrado...");
    } else {
        slides = await prismaClient.slide.update({
            where:{
                id: id
            },
            data:{
                name: name,
                slogan: slogan,
            },
            select:{
                id: true,
                name: true,
                slogan: true,
            }
        })
    } 

    return slides;
    //  return {id: id, hour: hour}
  }
}

export { UpdateSlideService };