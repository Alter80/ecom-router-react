import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { deleteFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    // received from useProducts hook and destructured the product portion
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    const handleRemove = key => {
        // console.log(key);
        // console.log('pressed');
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        deleteFromDb(key);
    }


    return (
        <div className='shop-container'>
            <div className='product-container'>
                
                <h1>Choosed among total products number of {products.length}</h1>
                <h4>Cart lenth: {cart.length}</h4>
                <h2>This is Order Review</h2>

                {
                    cart.map(product => <ReviewItem
                        key={product.key} 
                        product={product}
                        handleRemove={ handleRemove }></ReviewItem>)
                }

            </div>

            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default OrderReview;