const addToLocalStorage = (id) =>{

    let shoppingCart = {};

    const storedCart = localStorage.getItem("shopping-cart");
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }

    const quantity = shoppingCart[id];

    if(quantity){
        const newQuantity = parseInt(quantity) + 1;
        shoppingCart[id] = newQuantity;

    }else{

        shoppingCart[id] = 1;
    }

    localStorage.setItem("shopping-cart",JSON.stringify(shoppingCart));
    

}

const removeItem = (id) =>{
    
    const storedCart = localStorage.getItem("shopping-cart");

    // console.log(storedCart)
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart)
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem("shopping-cart",JSON.stringify(shoppingCart));
        }
    }


}

const deleteShoppingCart = () =>{
    localStorage.removeItem('shopping-cart');
}

export {addToLocalStorage,removeItem,deleteShoppingCart}