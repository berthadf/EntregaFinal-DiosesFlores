import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./CartWidgetComponent.css";

const CartWidgetComponent = () => {
    const { cart } = React.useContext(CartContext);

    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <div>
            <Link to="/cart" className="cartWidgetComponent">
                <FontAwesomeIcon icon={faCartPlus} />
                <span className="cartWidgetComponent">{totalItems}</span>
            </Link>
        </div>
    );
};

export default CartWidgetComponent;