import React from "react";

import "./ItemDetailContainerComponent.css";

const ItemDetailContainerComponent = ({ product }) => {
    return (
        <div className="itemDetailContainerComponent">
            <div className="imageGallery">
                {product.images ? (
                    product.images.map((image, index) => {
                        return (
                            <img
                                key={index}
                                src={image}
                                alt={product.title}
                                style={{ width: 100, height: 100 }}
                            />
                        );
                    })
                ) : (
                    <img
                        src={product.thumbnail}
                        alt={product.title}
                        style={{ width: 100, height: 100 }}
                    />
                )}
            </div>
            <div className="productDetail">
                <h1 className="productTitle">{product.title}</h1>
                <p className="productDescription">{product.description}</p>
                <p className="productPrice">{product.price}</p>
            </div>
        </div>
    );
};

export default ItemDetailContainerComponent;