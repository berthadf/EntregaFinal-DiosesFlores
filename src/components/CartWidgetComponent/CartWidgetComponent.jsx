import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

import "./CartWidgetComponent.css";

const CartWidgetComponent = () => {

    return (
        <div>
            <FontAwesomeIcon icon={faCartPlus} className="cartWidgetComponent" />
            <span className="cartWidgetComponent">0</span>
        </div>
    );
};

export default CartWidgetComponent;