// if the data is not available but is loading
// if we get the data
// if there's an error

import {useState, useEffect} from 'react';

export function useFetch(uri){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if(!uri) return;
        fetch(uri)
        .then((data => data.json()))
        .then(setData)
        .then(() => setLoading(false))
        .catch(setError)
    }, [uri])

    return { loading, data, error}
}