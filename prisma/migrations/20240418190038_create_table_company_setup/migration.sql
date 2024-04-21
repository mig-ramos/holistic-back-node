-- AlterTable
ALTER TABLE "contacts" ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "email" DROP NOT NULL,
ALTER COLUMN "zap" DROP NOT NULL,
ALTER COLUMN "content" DROP NOT NULL,
ALTER COLUMN "status" SET DEFAULT 'PENDENTE';

-- CreateTable
CREATE TABLE "companySetup" (
    "id" TEXT NOT NULL,
    "companyName" TEXT,
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

    CONSTRAINT "companySetup_pkey" PRIMARY KEY ("id")
);
