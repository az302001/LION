/*
  Warnings:

  - You are about to drop the column `reviewId` on the `Products` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Products" DROP CONSTRAINT "Products_reviewId_fkey";

-- AlterTable
ALTER TABLE "Products" DROP COLUMN "reviewId";

-- CreateTable
CREATE TABLE "_ProductsToReviews" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ProductsToReviews_AB_unique" ON "_ProductsToReviews"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductsToReviews_B_index" ON "_ProductsToReviews"("B");

-- AddForeignKey
ALTER TABLE "_ProductsToReviews" ADD CONSTRAINT "_ProductsToReviews_A_fkey" FOREIGN KEY ("A") REFERENCES "Products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductsToReviews" ADD CONSTRAINT "_ProductsToReviews_B_fkey" FOREIGN KEY ("B") REFERENCES "Reviews"("id") ON DELETE CASCADE ON UPDATE CASCADE;
