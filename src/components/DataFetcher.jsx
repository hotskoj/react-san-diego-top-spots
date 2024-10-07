import React, { useEffect, useState } from 'react';
import TopSpot from './TopSpot';
import axios from 'axios';

const DataFetcher = () => {
    const [topSpots, setTopSpots] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://ccc.helloworldbox.com/items/top_spots');
            const result = response.data.data;
            setTopSpots(result);
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };

    return (
        <div className="container">
            {loading ? (
            <p>Loading...</p>
            ) : error ? (
            <p>Error: {error}</p>
            ) : (
            topSpots.map((spot) => (
                <TopSpot key={spot.id} spot={spot}/>
            ))
            )}
        </div>
    );
};

export default DataFetcher;