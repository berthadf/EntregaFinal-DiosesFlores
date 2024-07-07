import React from 'react';
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./ItemListContainerComponent.css";

const ItemListContainerComponent = ({ products }) => {
    return (
        <div className="itemListContainerComponent">
            {products.map((product) => {
                return (
                    <Card key={product.id} className='productCard'>
                        <Card.Img variant="top" src={product.thumbnail} alt={product.title} />
                        <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Text>{product.description}</Card.Text>
                            <Link to={`/item/${product.id}`} className='link'>Ir a detalle</Link>
                        </Card.Body>
                    </Card>
                );
            })}
        </div>
    );
};

export default ItemListContainerComponent;