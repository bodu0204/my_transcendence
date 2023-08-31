/*
  Warnings:

  - You are about to drop the column `nikName` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "nikName",
ADD COLUMN     "nickName" TEXT;
