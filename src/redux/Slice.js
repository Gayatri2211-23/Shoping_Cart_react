import { createSlice } from "@reduxjs/toolkit";

const slice=createSlice({
    name:'productdata',
    initialState:{value:[]},
    reducers:{

        addProductData:(state,action)=>{
            var data=action.payload;
            state.value=[...state.value,{data,qty:1}];
        },

        incrementQty:(state,action)=>{
            var id = action.payload;
             
            state.value=state.value.map((obj)=>{
                if (obj.data.id === id) {
                  console.log(obj.qty*1);  // Log the quantity before incrementing
                  return { ...obj, qty: obj.qty + 1 };
                }
                return obj;
              })
        },

        decrementQty:(state,action)=>{
            var id = action.payload;
            state.value=state.value.map((obj)=>{
                if(obj.data.id == id){
                    if(obj.qty==1){
                         return null;
                    }
                    else{
                      return {...obj,qty:obj.qty-1};
                    }
                }
                return obj;
            })
            .filter(obj=>obj !== null);
             
        },

        removeItem:(state,action)=>{
            var id= action.payload;
            state.value=state.value.filter(obj=>obj.data.id !== id);
        }
    }
})
export default slice.reducer;
export const {addProductData , incrementQty,decrementQty,removeItem}=slice.actions;
