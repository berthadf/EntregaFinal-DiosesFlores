import React from "react";
import { CartContext } from "../../context/CartContext";
import "./ItemDetailContainerComponent.css";

const ItemDetailContainerComponent = ({ product }) => {
    const { addToCart, removeFromCart } = React.useContext(CartContext);
    const [quantity, setQuantity] = React.useState(0);

    const handleAdd = () => {
        setQuantity(quantity + 1);
        addToCart(product, 1);
    }

    const handleRemove = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
            removeFromCart(product, 1);
        }
    }

    return (
        <div className="itemDetailContainerComponent">
            <div className="imageGallery">
                <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="productImage"
                />
            </div>
            <div className="productDetail">
                <h1 className="productTitle">{product.title}</h1>
                <p className="productDescription">{product.description}</p>
                <p className="productPrice">Precio unitario: S/. {product.price} (soles peruanos)</p>
            </div>
            <div className="quantityControl">
                <button onClick={handleRemove} className="quantityButton">-</button>
                <span className="quantity">{quantity}</span>
                <button onClick={handleAdd} className="quantityButton">+</button>
            </div>
        </div>
    );
};

export default ItemDetailContainerComponent;