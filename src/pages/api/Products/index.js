import categoriesdata from "../../../Data/categories";
import productsdata from "../../../Data/products";
import talladata from "../../../Data/talla"
import genredata from "../../../Data/genre"
import prisma from "../../../../prisma/prisma";
import testdata from "../../../Data/test";

export default async function handler(req, res) {
    const { method } = req;

    console.log(productsdata)
    switch (method) {
        case "POST":
            try {
                const existingCategories = await prisma.category.findMany();
                const existingProducts = await prisma.products.findMany();
                // const existingsize = await prisma.products.



                const categories = await prisma.category.createMany({
                    data: categoriesdata
                })

                const sizes = await prisma.size.createMany({
                    data:talladata
                })

                const genres = await prisma.genre.createMany({
                    data:genredata
                })
                

                const products = await prisma.products.createMany({
                    data: testdata
                })

                

                return res.status(201).json({ products, categories,sizes,genres });

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