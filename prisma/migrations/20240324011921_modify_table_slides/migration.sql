/*
  Warnings:

  - Added the required column `slogan` to the `slides` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "slides" ADD COLUMN     "slogan" TEXT NOT NULL;
