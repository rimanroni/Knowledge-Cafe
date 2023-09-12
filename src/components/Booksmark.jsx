import React from 'react';
import Mark from './Mark';
import SpandTime from './SpandTime';
 

const Booksmark = ({mark}) => {
     
    return (
       
          <div className='md:w-1/3  '>
            <SpandTime/>
          <div className='  px-4 mt-8 bg-gray-400 ml-3 py-4 rounded-md  '>
          
            <h1 className='text-[22px] font-bold mt-2   mb-2'>Bookmarked Blogs : {mark.length}</h1>
             {mark.map((e, idx)=><Mark key={idx} data={e}/>)}
        </div>

          </div>
   
    );
};

export default Booksmark;