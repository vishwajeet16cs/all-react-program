export const initialState = {
    basket: [
        {id:"12345",
          title:"2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray",
          price:160000,
          rating:5,
          image:"https://m.media-amazon.com/images/I/71an9eiBxpL._AC_UL320_.jpg",
        },
        {id:"12345",
          title:"2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray",
          price:160000,
          rating:5,
          image:"https://m.media-amazon.com/images/I/71an9eiBxpL._AC_UL320_.jpg",
        }
    ],
    user: null,
};

function Reducer  (state,action){
    console.log(action);
    switch (action.type) {
        case 'ADD_TO_BASKET':
            // Logic for adding item to bas ket
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
            
            break;
    case 'REMOVE_FROM_BASKET':
        // Logic for Removing item from basket
        let newBasket = [...state.basket];
        const index = state.basket.findIndex((basketItem)=>basketItem.id === action.id);

        if (index >= 0){
            //item exsist in basket
            newBasket.splice(index, 1);
             

        }else{
            console.warn(
                `cont remove product (id: ${action.id}) as it no item`
            )
        }
            return{...state, basket: newBasket};
            default:
                return state;
    }
};
export default Reducer;
/*


 */