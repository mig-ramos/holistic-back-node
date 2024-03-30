/*
  Warnings:

  - You are about to drop the column `slide` on the `slides` table. All the data in the column will be lost.
  - Added the required column `name` to the `slides` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "slides" DROP COLUMN "slide",
ADD COLUMN     "name" TEXT NOT NULL;
