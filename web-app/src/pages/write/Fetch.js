import {useState, useEffect } from 'react';

const Fetch = (url) => {
    const [data, setData] = useState([]);
    const [isPend, setIsPend] = useState(true);
    const [erro, setErr] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, {signal: abortCont.signal})
            .then(res => {
                if(!res.ok)
                {
                    throw Error('Cannot get this data');
                }
                return res.json();
            })
            .then((data) => {
                setData(data);

                setIsPend(false);

                setErr(null);
            })
            .catch((err) => {
                if(err.name==='AbortError') {
                    console.log('Issue with fetch, aborted.');
                }
                else {
                    setErr(err.message);
                    setIsPend(false);
                }
            })
        }, 5);
        return () => abortCont.abort();
    }, [url]);

    return {data, isPend, erro};
}

export default Fetch;