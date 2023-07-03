export default [
    
    {
        "name": "Zapatillas Nike Air Max 90",
        "descripcion": "Zapatillas deportivas Nike Air Max 90 para hombre",
        "pryce": 120.99,
        "size": {
            "upsert": [
              { "where": { "id": 1 }, "create": { "size": 36 } },
              { "where": { "id": 2 }, "create": { "size": 38 } },
              { "where": { "id": 4 }, "create": { "size": 42 } }
            ]
          },
        "image": "https://res.cloudinary.com/dbnp4soeh/image/upload/v1688195146/1.webp",
        // "modelsId":0,
        "categoryId": 1,
        "genreId": 1,
        "rating": 0,
        "discount": 0,
    },
    {
        "name": "Zapatillas Nike Air Force 1",
        "descripcion": "Zapatillas clásicas Nike Air Force 1 para mujer",
        "pryce": 99.99,
        "size": {
            "upsert": [
              { "where": { "id": 1 }, "create": { "size": 36 } },
              { "where": { "id": 2 }, "create": { "size": 38 } },
              { "where": { "id": 4 }, "create": { "size": 42 } }
            ]
          },
        "image": "https://res.cloudinary.com/dbnp4soeh/image/upload/v1688195146/2.webp",
        // "modelsId":0,
        "categoryId": 1,
        "genreId": 2,
        "rating": 0,
        "discount": 0,
    }
]