import React from 'react';

const Mark = ({data}) => {
    return (
        <div className='bg-white rounded-md px-4 mt-2  py-4'>
          <h1 className='text-2xl px-4 '>{data.title}</h1>            
        </div>
    );
};

export default Mark;