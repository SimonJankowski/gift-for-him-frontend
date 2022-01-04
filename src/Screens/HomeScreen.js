import React from 'react';
import './HomeScreen.css';
import Product from '../components/Product';
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';   // this is to replace mapStateToProps
import { getProducts as listProducts } from '../redux/actions/productActions'
import Loader from "react-js-loader"


const HomeScreen = () => {

    const dispatch = useDispatch();
    const getProducts = useSelector(state => state.getProducts)
    const { products, loading, error } = getProducts;

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])


    return (
        <div className='homescreen'>
            <h2 className='homescreen__title'> Latest Gifts</h2>
            <div className='homescreen__products'>
                {loading ? <div className="loader_container"><Loader className="loader" type="spinner-circle" bgColor={"#171717"} title={"Loading Gifts"} color={'#171717'} size={100} /></div>
                    : error ? <h2>{error}</h2>
                        : products.map((p) => (
                            <Product
                                key={p._id}
                                name={p.name}
                                description={p.description}
                                price={p.price}
                                imageUrl={p.imageUrl}
                                productId={p._id}
                            />
                        ))}

            </div>
        </div>
    )
}

export default HomeScreen
