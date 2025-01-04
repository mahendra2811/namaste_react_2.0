import { createSlice } from "@reduxjs/toolkit"


const cartSlice = createSlice({
    name: "cart",
    initialState:{
        items: []
    },
    reducers:{
        // mutating the state here 
          addItem: (state , action )=>{
            //   but in newer state we have to mutate the state here
              state.items.push(action.payload);
              
              
              //  do not mutate the state directly
            // pehle ese kerte thee lakin ab ese nahi kertee haa
            // const newState  = [...state];
            // newState.items.push(action.payload)
            // return newState;
            // returning is mandatory earlier  

        },
        removeItem:(state )=>{
            state.items.pop();
        },
        clearCart: (state)=>{
            state.items.length =0 ;
            // return {items:[]};
        }

    }
});
export const {addItem , removeItem , clearCart} = cartSlice.actions;
export default cartSlice.reducer;