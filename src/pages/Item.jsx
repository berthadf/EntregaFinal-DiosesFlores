import React from "react";
import { useProductById } from "../hooks/useProductById";
import ItemDetailContainerComponent from "../components/ItemDetailContainerComponent/ItemDetailContainerComponent";
import { useParams } from "react-router-dom";
import LoaderComponent from "../components/LoaderComponent/LoaderComponent";

const Item = () => {
    const { id } = useParams();
    const { product, loading } = useProductById(id);

    return loading ? (
        <LoaderComponent />
    ) : (
        <ItemDetailContainerComponent product={product} />
    );
};

export default Item;