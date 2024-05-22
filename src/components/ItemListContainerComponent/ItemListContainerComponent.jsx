import React from 'react';

import "./ItemListContainerComponent.css";

const ItemListContainerComponent = ({ greeting }) => {

    return (
        <div className="itemListContainerComponent"> {greeting} </div>
    );
};

export default ItemListContainerComponent;