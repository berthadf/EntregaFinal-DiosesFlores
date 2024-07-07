import React from 'react';
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

export const useProductsByCategory = (category) => {
    const [products, setProducts] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
        const db = getFirestore();
        const productsCollection = collection(db, "products");
        const productsQuery = query(productsCollection, where("category", "==", category));

        getDocs(productsQuery)
            .then((snapshot) => {
                setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
            })
            .catch(() => {
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [category]);

    return { products, loading, error };
};