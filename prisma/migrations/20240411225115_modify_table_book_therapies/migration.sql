/*
  Warnings:

  - Added the required column `descriction` to the `book-therapy` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "book-therapy" ADD COLUMN     "descriction" TEXT NOT NULL,
ADD COLUMN     "mostrar" TEXT DEFAULT '0';
