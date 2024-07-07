import React from 'react';
import { useGetCollectionItems } from '../hooks/useGetCollectionItems';
import ItemListContainerComponent from '../components/ItemListContainerComponent/ItemListContainerComponent';
import LoaderComponent from '../components/LoaderComponent/LoaderComponent';

const Home = () => {

    React.useEffect(() => {
        document.title = "Buffet saludable";
    }, []);

    const { items, loading } = useGetCollectionItems("products");

    return loading ? (
        <LoaderComponent />
    ) : (
        <ItemListContainerComponent products={items} />
    );
};

export default Home;