import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getProductsByApi } from './productsApi'

export const getallProducts = createAsyncThunk("products/getallProducts", async (_, { rejectWithValue }) => {
    try {
        const response = await getProductsByApi()
        return response.data.getallProducts
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})


export const selectRandomPhotos = createAsyncThunk("products/getallProducts", (_, { getState }) => {
    const state = getState()
    const allProducts = state.products.products
    const randomIndexes = getProductsByApi(allProducts.length, 10)
    const selectedPhotos = randomIndexes.map(index => allProducts[index].photo)
    return selectedPhotos
})

const generateStatus = {
    IDLE: "idle",
    SUCCESSFUL: 'success',
    PENDING: 'pending',
    FAILED: 'failed',
}

const initialState = {
    products: [],
    photos: [],
    filter: []
}

const productsSlice = createSlice({
    name: 'products', initialState, reducers: {

        getimgerandom: (state) => {

            const arrayvacio = []

            for (var i = 0; i < 10; i++) {

                if (state.products[i].hasOwnProperty('image') && state.products[i].hasOwnProperty('name') && state.products[i].hasOwnProperty('descripcion') && state.products[i].hasOwnProperty('rating')) {

                    console.log(arrayvacio)

                    arrayvacio.push({ image: state.products[i].image, name: state.products[i].name, descripcion: state.products[i].descripcion, rating: state.products[i].rating });
                }
            }

            return {
                ...state,
                photos: arrayvacio
            }
        },

        toggleSortOrder: (state) => {
            state.sortOrder = state.sortOrder === 'asc' ? 'desc' : 'asc';
        },

        sortProducts: (state) => {
            const { products, sortOrder } = state;
            state.products = products.slice().sort((a, b) => {
                const nameA = a.name.toLowerCase();
                const nameB = b.name.toLowerCase();
                if (sortOrder === 'asc') {
                    return nameA.localeCompare(nameB);
                } else {
                    return nameB.localeCompare(nameA);
                }
            });
        },

        toggleSortPrice: (state) => {
            state.sortOrderPrice = state.sortOrderPrice === 'min' ? 'max' : 'min';
          },
          
          sortPrice: (state) => {
            const { products, sortOrderPrice } = state;
           
            state.products = products.slice().sort((a, b) => {
              const priceA = parseFloat(a.pryce); 
              const priceB = parseFloat(b.pryce); 
              if (sortOrderPrice === 'min') {
                return priceA - priceB;
              } else {
                return priceB - priceA;
              }
            });

          },


    }, extraReducers: (builder) => {
        builder.addCase(getallProducts.fulfilled, (state, action) => {
            state.products = action.payload
            state.status = generateStatus.SUCCESSFUL
            console.log(state.status)
        })

        builder.addCase(getallProducts.pending, (state, action) => {

            state.status = generateStatus.PENDING
            console.log(state.status)
        })
        builder.addCase(getallProducts.rejected, (state, action) => {

            state.status = generateStatus.FAILED
            console.log(state.status)
        })


    },


})
export const { getimgerandom, sortProducts, toggleSortOrder, sortPrice, toggleSortPrice } = productsSlice.actions
export default productsSlice.reducer