-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "image" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Products" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "genreId" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "pryce" DOUBLE PRECISION NOT NULL,
    "discount" INTEGER NOT NULL,
    "modelsId" INTEGER,
    "rating" DOUBLE PRECISION NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Genre" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Genre_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Models" (
    "id" SERIAL NOT NULL,
    "models" TEXT NOT NULL,

    CONSTRAINT "Models_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Size" (
    "id" SERIAL NOT NULL,
    "size" INTEGER NOT NULL,

    CONSTRAINT "Size_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Favorite" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "pruductId" INTEGER NOT NULL,

    CONSTRAINT "Favorite_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reviews" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "comentary" TEXT NOT NULL,

    CONSTRAINT "Reviews_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transaction" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "approved" BOOLEAN NOT NULL DEFAULT false,
    "cost" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ProductsToTransaction" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_ProductsToSize" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_ProductsToReviews" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_ProductsToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ProductsToTransaction_AB_unique" ON "_ProductsToTransaction"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductsToTransaction_B_index" ON "_ProductsToTransaction"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ProductsToSize_AB_unique" ON "_ProductsToSize"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductsToSize_B_index" ON "_ProductsToSize"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ProductsToReviews_AB_unique" ON "_ProductsToReviews"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductsToReviews_B_index" ON "_ProductsToReviews"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ProductsToUser_AB_unique" ON "_ProductsToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductsToUser_B_index" ON "_ProductsToUser"("B");

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_modelsId_fkey" FOREIGN KEY ("modelsId") REFERENCES "Models"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES "Genre"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reviews" ADD CONSTRAINT "Reviews_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductsToTransaction" ADD CONSTRAINT "_ProductsToTransaction_A_fkey" FOREIGN KEY ("A") REFERENCES "Products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductsToTransaction" ADD CONSTRAINT "_ProductsToTransaction_B_fkey" FOREIGN KEY ("B") REFERENCES "Transaction"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductsToSize" ADD CONSTRAINT "_ProductsToSize_A_fkey" FOREIGN KEY ("A") REFERENCES "Products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductsToSize" ADD CONSTRAINT "_ProductsToSize_B_fkey" FOREIGN KEY ("B") REFERENCES "Size"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductsToReviews" ADD CONSTRAINT "_ProductsToReviews_A_fkey" FOREIGN KEY ("A") REFERENCES "Products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductsToReviews" ADD CONSTRAINT "_ProductsToReviews_B_fkey" FOREIGN KEY ("B") REFERENCES "Reviews"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductsToUser" ADD CONSTRAINT "_ProductsToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductsToUser" ADD CONSTRAINT "_ProductsToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
