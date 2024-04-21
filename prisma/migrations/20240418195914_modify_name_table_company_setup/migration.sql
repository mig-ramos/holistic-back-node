/*
  Warnings:

  - You are about to drop the `companySetup` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "companySetup";

-- CreateTable
CREATE TABLE "company-setup" (
    "id" TEXT NOT NULL,
    "companyName" TEXT,
    "description" TEXT,
    "photo" TEXT,
    "companyAddress" TEXT,
    "zap" TEXT,
    "email" TEXT,
    "faceBook" TEXT,
    "youtube" TEXT,
    "instagram" TEXT,
    "twtter" TEXT,
    "officeOur" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "company-setup_pkey" PRIMARY KEY ("id")
);
