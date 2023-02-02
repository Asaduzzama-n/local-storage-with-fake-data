import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {

    const [product,setProduct] = useState([]);

    useEffect(()=>{
        fetch('fake-data.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])

    return (
        <div>
            <h1>Total Products: {product.length}</h1>

            {
                product.map(product => <Product product={product} key={product._id}></Product>)
            }

        </div>
    );
};

export default Products;