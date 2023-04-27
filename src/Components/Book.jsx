import React from 'react';

const Book = ({book}) => {
    const {image,isbn13,subtitle,price,title,url} =book;
    return (
        <div className='border border-slate-600 rounded p-4 shadow shadow-sm shadow-slate-600'>
            <img className='w-full' src={image} alt="" />
            <h2 className='text-2xl font-extrabold py-2'>{title}</h2>
            <h3 className='text-xl font-thin py-2'>Topics : {subtitle}</h3>
            <h2 className='text-2xl font-bold'>Price : {price}</h2>
            <div>
            <button className='btn btn-outline bg-amber-300 bg m-4' >Add to Cart</button>
            <button className='btn btn-outline bg-amber-500'><a href={url}>Buy Now</a></button>
            </div>
            
        </div>
    );
};

export default Book;