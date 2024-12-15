import './Product.css'
import { AddToCartIcon  } from './Icons.jsx'
import { useEffect, useState } from 'react'
import  Axios from 'axios'

export function Products() {

    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const response  = await Axios.get("https://fakestoreapi.com/products");
       console.log(response.data)
        setProducts(response.data);
    }


    useEffect(()=> {
        getProducts();
    })

    const HtmlProducts =products.map((product) => {
        return(
           <main className='products'>
            <ul>
                <li key={product.id}>
                    <img src={product.image} alt="" />
                    <div>
                        <strong>{product.title}</strong>
                    </div>
                    <div>
                        <button>
                            <AddToCartIcon />
                        </button>
                    </div>
                </li>
            </ul>
           </main>
        )
    })

    return (
        <div>{HtmlProducts}</div>
    )

}