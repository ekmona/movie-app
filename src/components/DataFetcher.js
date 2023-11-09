import React, { useState, useEffect} from "react";

function DataFetcher() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState();
    
    useEffect(() => {
        async function fetchData() {
            try {
                const data = await(await fetch('https://api.coinpaprika.com/v1/tickers')).json();
                setData(data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }

    return (
        <div>
            {data.map((item) => (
                <div key={item.id}>{item.name}</div>
            ))}
        </div>
    )
}
export default DataFetcher;