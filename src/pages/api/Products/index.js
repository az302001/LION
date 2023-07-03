import categoriesdata from "../../../Data/categories";
import productsdata from "../../../Data/products";
import talladata from "../../../Data/talla";
import genredata from "../../../Data/genre";
import prisma from "../../../../prisma/prisma";
import testdata from "../../../Data/test";

export default async function handler(req, res) {
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const categories = await prisma.category.findMany();
        const genres = await prisma.genre.findMany();
        const products = await prisma.products.findMany({
          include: {
            sizes: true,
          },
        });
        const sizes = await prisma.size.findMany();
        const models = await prisma.models.findMany();
        return res
          .status(200)
          .json({ products, categories, sizes, models, genres });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    case "POST":
      try {
        // const existingCategories = await prisma.category.findMany();
        // const existingProducts = await prisma.products.findMany();
        // // const existingsize = await prisma.products.

        const categories = await prisma.category.createMany({
          data: categoriesdata,
        });

        const sizes = await prisma.size.createMany({
          data: talladata,
        });

        const genres = await prisma.genre.createMany({
          data: genredata,
        });

        // const products = await prisma.products.createMany({
        //   data: testdata,
        // });
        let count = 0;
        for (const product of testdata) {
          await prisma.products.create({
            data: {
              name: product.name,
              descripcion: product.descripcion,
              pryce: product.pryce,
              sizes: { connect: product.sizeIds.map((id) => ({ id })) },
              image: product.image,
              categoryId: product.categoryId,
              genreId: product.genreId,
              rating: product.rating,
              discount: product.discount,
            },
          });
          count++;
        }
        return res
          .status(201)
          .json({ products: { count }, categories, sizes, genres });
        // return res.status(201).json({ products: count });

        // if (!existingCategories.length && !existingProducts.length) {
        //     const categories = await prisma.category.createMany({
        //         data: categoriesdata
        //     })

        //     const sizes = await prisma.size.createMany({
        //         data:talladata
        //     })

        //     const genres = await prisma.genre.createMany({
        //         data:genredata
        //     })

        //     const products = await prisma.products.createMany({
        //         data: productsdata
        //     })

        //     return res.status(201).json({ products, categories,sizes,genres });
        // }
        // else {
        //     return res.status(200).json({ existingCategories, existingProducts });
        // }
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
      break;

    default:
      break;
  }
}
