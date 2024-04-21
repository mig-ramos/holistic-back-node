/*
  Warnings:

  - You are about to drop the column `twtter` on the `company-setup` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "company-setup" DROP COLUMN "twtter",
ADD COLUMN     "twitter" TEXT;
