/*
  Warnings:

  - You are about to alter the column `discount` on the `Products` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Products" ALTER COLUMN "discount" SET DATA TYPE INTEGER;