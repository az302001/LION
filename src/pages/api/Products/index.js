import categoriesdata from "../../../Data/categories";
import productsdata from "../../../Data/products";
import talladata from "../../../Data/talla";
import genredata from "../../../Data/genre";
import prisma from "../../../../prisma/prisma";

export default async function handler(req, res) {
    const { method } = req;
    const { name, category, genre, pryce } = req.query
    switch (method) {
        case "GET":
            try {
                if (name) {
                    const getproductbyname = await prisma.products.findMany({
                        where: {
                            name: {
                                contains: name,
                                mode: "insensitive",
                            }
                        },
                        include: {
                            sizes: {
                                select: {
                                    size: true,
                                },
                            },
                            category: {
                                select: {
                                    name: true,
                                },
                            },
                            genre: {
                                select: {
                                    name: true,
                                },
                            },
                        },

                    });

                    if (getproductbyname.length === 0) {
                        return res.status(404).json({ error: "Product not found" });

                    }
                    return res.status(200).json({ getproductbyname })
                } else if (category) {
                    const getproductbyCategory = await prisma.products.findMany({
                        where: {
                            category: {
                                name: {
                                    contains: category,
                                    mode: "insensitive",
                                },
                            },
                        },
                        include: {
                            sizes: {
                                select: {
                                    size: true,
                                },
                            },
                            category: {
                                select: {
                                    name: true,
                                },
                            },
                            genre: {
                                select: {
                                    name: true,
                                },
                            },
                        },
                       
                    })
                    if (getproductbyCategory.length === 0) {
                        return res.status(404).json({ error: "Category not found" });
                    }
                    return res.status(200).json({ getproductbyCategory })
                }
                else if (genre) {
                    const getproductbyGenre = await prisma.products.findMany({
                        where: {
                            genre: {
                                name: {
                                    contains: genre,
                                    mode: "insensitive",
                                },
                            },
                        },
                        include: {
                            sizes: {
                                select: {
                                    size: true,
                                },
                            },
                            category: {
                                select: {
                                    name: true,
                                },
                            },
                            genre: {
                                select: {
                                    name: true,
                                },
                            },
                        },

                    })
                    if (getproductbyGenre.length === 0) {
                        return res.status(404).json({ error: "Genres not found" })
                    }
                    return res.status(200).json({ getproductbyGenre })
                }
                else if (pryce) {
                    const getproductbyPryce = await prisma.products.findMany({
                        where: { pryce: parseFloat(pryce) }
                    })
                    return res.status(200).json({ getproductbyPryce });
                } else {
                    const getallProducts = await prisma.products.findMany({
                        include: {
                            sizes: {
                                select: {
                                    size: true,
                                },
                            },
                            category: {
                                select: {
                                    name: true,
                                },
                            },
                            genre: {
                                select: {
                                    name: true,
                                },
                            },
                        },
                    });
                    return res.status(200).json({ getallProducts });
                }

            } catch (error) {
                res.status(500).json({ error: error.message });
            }
        case "POST":
            try {
                const existingCategories = await prisma.category.findMany();
                const existingProducts = await prisma.products.findMany();
                const existingsizes = await prisma.size.findMany();
                const existingGenres = await prisma.genre.findMany();

                if (!existingCategories.length && !existingProducts.length && !existingsizes.length && !existingGenres.length) {
                    const categories = await prisma.category.createMany({
                        data: categoriesdata,
                    });

                    const sizes = await prisma.size.createMany({
                        data: talladata,
                    });

                    const genres = await prisma.genre.createMany({
                        data: genredata,
                    });
                    let count = 0;
                    for (const product of productsdata) {
                        await prisma.products.create({
                            data: {
                                name: product.name,
                                descripcion: product.descripcion,
                                pryce: product.pryce,
                                sizes: { connect: product.size.map((id) => ({ id })) },
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
                } else {
                    return res.status(200).json({ existingCategories, existingProducts, existingsizes, existingGenres })
                }

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
