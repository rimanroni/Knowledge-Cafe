import React, { useEffect, useState } from 'react';

const Bologs = () => {
    const [bologs, setBologs] = useState([])
    useEffect(()=>{
        fetch(' fakeData.json')
        .then(res=>res.json())
        .then(data=>setBologs(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Bologs;