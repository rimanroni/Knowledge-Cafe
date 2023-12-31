import React from 'react';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center mt-4 border-b-2 pb-4 font-bold'>
              <h1 className='text-2xl md:text-3xl font-bold'>Knowledge Cafe </h1>
              <img src="images/profile.png" alt="" />
        </div>
    );
};

export default Navbar;