import React from 'react';
import './Cart.css'

const Cart = () => {
    return (
        <div className='h-screen cart bg-base-300 p-10 '>
            <div className='grid-cols-8 bg-white order-preview'>
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam officia similique nobis voluptate iure, numquam rem qui perferendis tempora inventore.</h2>

            </div>
            <div className='grid-cols-4 bg-white p-10 '>
                <p className='text-2xl '>Subtotal (<span>{}</span>item)</p>
                <p className='py-4'>Amount {}</p>
                <button className='checkout-btn'>Proceed to checkout</button>
            </div>
        </div>
    );
};

export default Cart;