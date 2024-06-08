import React from 'react';

import "./ItemListContainerComponent.css";

import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";


const ItemListContainerComponent = ({ products }) => {
    return (
        <div className="itemListContainerComponent">
            {products.map((product) => {
                return (
                    <Card key={product.id} style={{ width: "18rem", margin: 10 }} className='card'>
                        <Card.Img variant="top" src={product.thumbnail} />
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