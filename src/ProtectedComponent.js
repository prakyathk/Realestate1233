import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProtectedComponent = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch data from protected endpoint when component mounts
        fetchData();
    }, []);

    const fetchData = () => {
        const token = localStorage.getItem('token');
        axios.get('/buyer/login', { headers: { Authorization: `Bearer ${token}` } })
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                setError(error.response.data);
            });
    };

    return (
        <div>
            <h2>Protected Component</h2>
            {data && <p>Data: {JSON.stringify(data)}</p>}
            {error && <p>Error: {error}</p>}
        </div>
    );
};

export default ProtectedComponent;
