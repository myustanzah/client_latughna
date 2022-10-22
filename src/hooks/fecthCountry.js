import { useState, useEffect } from "react";

export default function useFetchCountry(){
    const [dataCountry, setData] = useState([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(
            'https://restcountries.com/v2/all',
        )
            .then((response) => response.json())
            .then((resData) => setData(resData))
            .catch(console.log)
            .finally(() => {
                setTimeout(() => {
                    setLoading(false);
                }, 3000);
            });
    }, []);

    return [dataCountry, loading]

}