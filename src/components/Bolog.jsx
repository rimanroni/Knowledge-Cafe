import React from 'react';
import { BsFillBookmarkFill } from "react-icons/bs";

const Bolog = ({bolog,  handleMark }) => {
 
    const {cover_img, title, author, author_img, posted_date, reading_time , hash_tag} = bolog;
    return (
        <div className='mb-20 mt-8 '>
           <img src={cover_img} alt="cover.img" className='w-[845px] h-[450px] rounded-sm ' />
            <div className='flex mt-4 justify-between items-center'>
                <div className='flex items-center mt-2 '>
                <img src={author_img} className='w-[70px] h-[70px]' alt="" /> 
                  <div className='pl-4'>
                  <h1 className='font-bold text-[22px]'>{author}</h1>  
                    <span className='font-semibold'>{posted_date}</span>
                  </div>
                 </div>
                 <div className='pr-4'>
                    <span>{reading_time} min read    
                    <button onClick={()=> handleMark({title})}
                     className='inline cursor-pointer'>
                     <BsFillBookmarkFill className='inline ml-2'/>
                     
                    </button>
                    </span>
                 </div>
            </div>
            <div className='mt-4 space-y-3  '>
             <h1 className='text-2xl font-bold'>{title}</h1>
            <span className='font-[500] text-[17px]'>{hash_tag[0]} </span>
            <span className='font-[500] text-[17px]'>{hash_tag[1]}</span>
            </div>
            <button className='mt-3   underline text-blue-600 font-bold text-[17px]'>
                <h1>Make as read </h1>
            </button>

        </div>
    );
};

export default Bolog;