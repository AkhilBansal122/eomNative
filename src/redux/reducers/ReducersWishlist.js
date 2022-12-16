import { 
    ADD_TO_WISHLIST,
    REMOVE_TO_WISHLIST
     } from "../ActionTypes";

    export const  ReducersWishlist = (state =[],action)=>{
    
        switch(action.type)
        {
            case ADD_TO_WISHLIST:
            return [...state,action.payload];
            
            case REMOVE_TO_WISHLIST:
            const deleteArray = state.filter((Item,index)=>{
                return index != action.payload;
            });
            return deleteArray;
            default :
            return state;
        }
    }