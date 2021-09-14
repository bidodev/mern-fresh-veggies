import { createSlice, PayloadAction, createSelector, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState, AppDispatch } from '../../../store';

export interface ShopState {
    cart: {
        items: {
            [key: string]: number
        }
    }
}

const initialState: ShopState = {
    cart: {
        items: {}
    }
}

export const checkoutCart = createAsyncThunk('shop/checkoutCart', async (cartItems: any, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const request = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    return request.json();
});

const shopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {
        receivedProducts(state, action: PayloadAction<any>) {
            console.log(action);
            return {
                ...state,
            }
        },
        addToCard(state, action: PayloadAction<string>) {
            const id = action.payload;
            state.cart.items[id] = state.cart.items[id] ? state.cart.items[id]++ : 1;
        }
    },
    extraReducers: (builder) => {
        // Handling Custom Actions in our Slice
        builder.addCase("shop/checkout/pending", (state, action) => {
            console.log(action)
        })
        builder.addCase("shop/checkout/fulfilled", (state, action) => {
            console.log("shop/checkout/fulfilled", action)
        })

        builder.addCase(checkoutCart.pending, (state, action) => {
            console.log("Fetching the api..")
            console.log(action);
        })
        builder.addCase(checkoutCart.fulfilled, (state, action) => {
            console.log("Call fulfilled")
            console.log(action.payload);
        })
        builder.addCase(checkoutCart.rejected, (state, action) => {
            console.log("Call rejected")
            console.log(action.error);
        })
    }
});

export const { receivedProducts, addToCard } = shopSlice.actions;
export default shopSlice.reducer;

export function checkout() {
    return function checkoutThunk(dispatch: AppDispatch) {
        dispatch({ type: "shop/checkout/pending" })
    }
}


// memoized selector
export const getNumItems = createSelector(
    (state: RootState) => state.shop.cart.items,
    (items) => {
        return items;
    }
)