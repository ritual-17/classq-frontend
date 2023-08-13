import React, { useContext } from 'react'
import './Cart.css'

import { CartContext } from '../../../contexts/CartContext'

const Cart = () => {

    const [cart, setCart] = useContext(CartContext);
    return (
        <div className='cart-list'>
            {cart.map((section, index) => (
                index == 0 ? section.name : ", " + section.name
            ))}
        </div>
    )
}

export default Cart