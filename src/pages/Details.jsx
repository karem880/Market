import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Details() {
    const params = useParams();
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/src/data/db.json`);
                setData(response.data);
            } catch (error) {
                console.error('An error occurred while fetching the data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='mt-52'>
            <p>Details </p>
            <img src="" alt='' />
            <p></p>
        </div>
    );
}

export default Details;
