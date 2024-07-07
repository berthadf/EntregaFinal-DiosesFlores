import React from 'react'
import { useProductsByCategory } from '../hooks/useProductsByCategory';
import ItemListContainerComponent from '../components/ItemListContainerComponent/ItemListContainerComponent';
import { useParams } from 'react-router-dom';
import LoaderComponent from "../components/LoaderComponent/LoaderComponent";

const Category = () => {
    const { id } = useParams();
    const { products, loading } = useProductsByCategory(id);

    return loading ? (
        <LoaderComponent />
    ) : (
        <ItemListContainerComponent products={products} />
    );
};

export default Category;