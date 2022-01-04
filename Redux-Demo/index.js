const BUY_CAKE = "BUY_CAKE";// string const for type
// Action creater -- function which retun the action
function buyCake(){
    return {
        type:BUY_CAKE,
        info:"first redux action"
    }  
} 