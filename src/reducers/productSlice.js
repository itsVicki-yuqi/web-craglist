import {createSlice} from '@reduxjs/toolkit';

const initialState = [
    {
        id: 1, 
        title: "shoe", 
        price: 20,
        description: "nothing",
        location: "Dallas, TX",
        category: "clothes"
    },
    {
        id: 2,
        title: "Books",
        price: 25,
        description: "I dont know what to say",
        location: "Tampa, FL",
        category: "books"
    }
]

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers:{
        saveProduct: (state, action) => {
            const newProduct = {
                id: Date.now(),
                userID: action.payload.userID,
                title: action.payload.title,
                price: action.payload.price,
                description: action.payload.description,
                location: action.payload.location,
                condition: action.payload.condition,
                category: action.payload.category,
                image: action.payload.image
            };
            state.push(newProduct);
            
        }
    },
});

export const {saveProduct} = productSlice.actions;
export default productSlice.reducer;

