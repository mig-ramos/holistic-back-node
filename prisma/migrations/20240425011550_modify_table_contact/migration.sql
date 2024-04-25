/*
  Warnings:

  - You are about to drop the column `content` on the `contacts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "contacts" DROP COLUMN "content",
ADD COLUMN     "message" TEXT,
ADD COLUMN     "subject" TEXT;
