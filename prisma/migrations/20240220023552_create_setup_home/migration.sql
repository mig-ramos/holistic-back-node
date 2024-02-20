-- CreateEnum
CREATE TYPE "status" AS ENUM ('PENDENTE', 'ANDAMENTO', 'CONCLUIDO');

-- CreateTable
CREATE TABLE "slides" (
    "id" TEXT NOT NULL,
    "slide" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "slides_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "about" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "subTitle" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "photo" TEXT NOT NULL,

    CONSTRAINT "about_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contacts" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "zap" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "status" "status" NOT NULL,

    CONSTRAINT "contacts_pkey" PRIMARY KEY ("id")
);
