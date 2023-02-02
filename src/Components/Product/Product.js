import React from 'react';
import { addToLocalStorage,removeItem } from '../../Utilities/localStorage';
const Product = (props) => {
    const {_id,name,price} = props.product;



    return (
        <div>
            <h2>Name: {name}</h2>
            <h4>ID: {_id}</h4>
            <h5>Price: {price} </h5>
            <button onClick={()=>addToLocalStorage(_id)} >Add item</button>
            <br />
            <button onClick={()=>removeItem(_id)}>Remove item</button>

            <hr />
        </div>
    );
};

export default Product;