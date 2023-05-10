import React from 'react'
import { useSelector } from 'react-redux'
import { CartIcon } from '../icons'

const NavBar = () => {
    const { amount } = useSelector(store => store.cart);
    return (
        <nav>
            <div className="nav-center">
                <h3>redux toolkit</h3>
                <div className="nav-container">
                    <CartIcon />
                    <div className="amount-container">
                        <div className="total-amount">{amount}</div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar