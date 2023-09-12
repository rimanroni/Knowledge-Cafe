import React, { useEffect, useState } from 'react';
import Bolog from './Bolog';

const Bologs = ({ handleMark }) => {
    const [bologs, setBologs] = useState([])
    useEffect(()=>{
        fetch(' fakeData.json')
        .then(res=>res.json())
        .then(data=>setBologs(data))
    },[])
    return (
        <div className='md:w-9/12'>
             {bologs.map(bolog=><Bolog 
             key={bolog.id}
             handleMark={ handleMark }
             bolog={bolog}
             />)}
        </div>
    );
};

export default Bologs;