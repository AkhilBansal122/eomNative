import { 
    ADD_TO_CART,
    REMOVE_TO_CART
     } from "../ActionTypes";

    export const  Reducers = (state =[],action)=>{
    
        switch(action.type)
        {
            case ADD_TO_CART:
            return [...state,action.payload];
            
            case REMOVE_TO_CART:
            const deleteArray = state.filter((Item,index)=>{
                return index != action.payload;
            });
            return deleteArray;
            default :
            return state;
        }
    }