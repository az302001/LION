/*
  Warnings:

  - You are about to drop the column `sizeId` on the `Products` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Products" DROP CONSTRAINT "Products_sizeId_fkey";

-- AlterTable
ALTER TABLE "Products" DROP COLUMN "sizeId";

-- CreateTable
CREATE TABLE "_ProductsToSize" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ProductsToSize_AB_unique" ON "_ProductsToSize"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductsToSize_B_index" ON "_ProductsToSize"("B");

-- AddForeignKey
ALTER TABLE "_ProductsToSize" ADD CONSTRAINT "_ProductsToSize_A_fkey" FOREIGN KEY ("A") REFERENCES "Products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductsToSize" ADD CONSTRAINT "_ProductsToSize_B_fkey" FOREIGN KEY ("B") REFERENCES "Size"("id") ON DELETE CASCADE ON UPDATE CASCADE;
