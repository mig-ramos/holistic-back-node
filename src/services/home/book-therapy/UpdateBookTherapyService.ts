import prismaClient from "../../../prisma";

interface BookTherapyRequest {
  id: string;
  title: string;
  subTitle: string;
  buttonTitle: string;
  photo: string;
  description: string;
  mostrar?: string;
}

class UpdateBookTherapyService {
  async execute({ id, title, subTitle, buttonTitle, photo, description, mostrar }: BookTherapyRequest) {
    if (title === "" || subTitle === "" || buttonTitle === "" || photo === "" || description === "") {
      throw new Error("Book Therapy inválido");
    }

    let bookTherapy = await prismaClient.bookTheraapies.findFirst({
      where: {
        id: id,
      },
      select: {
        id: true,
      },
    });

    if (!bookTherapy) {
      throw new Error("Book Therapy não encontrado...");
    } else {
      bookTherapy = await prismaClient.bookTheraapies.update({
        where: {
          id: id
        },
        data: {
          title: title,
          subTitle: subTitle,
          buttonTitle: buttonTitle,
          photo: photo,
          description: description,
          mostrar: mostrar,
        },
        select: {
          id: true,
          title: true,
          subTitle: true,
          buttonTitle: true,
          photo: true,
          description: true,
          mostrar: true,
        }
      })
    }

    return bookTherapy;
    //  return {id: id, hour: hour}
  }
}

export { UpdateBookTherapyService };