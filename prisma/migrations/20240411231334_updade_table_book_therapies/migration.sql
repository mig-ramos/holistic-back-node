/*
  Warnings:

  - You are about to drop the column `descriction` on the `book-therapy` table. All the data in the column will be lost.
  - Added the required column `description` to the `book-therapy` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "book-therapy" DROP COLUMN "descriction",
ADD COLUMN     "description" TEXT NOT NULL;
