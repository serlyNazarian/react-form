import React, { useState } from 'react';
import './products.css';

const Products = () => {
    const [products, setProducts] = useState([
        {id: 1, name:'Hecaniv'},
        {id: 2, name: 'Papuk xaxaliq'},
        {id: 3, name:'Traktor'},
        {id: 4, name:'Meqena'},
    ])
    return (
        <div>
            <div className="products">
                {products.map((item) =>(
                    <div className="item">
                        <h1>{item.name}</h1>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products;