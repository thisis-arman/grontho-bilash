import React from 'react';
import Books from './Books';
import { Link } from 'react-router-dom';

const Categories = () => {
    return (
        <div className='grid md:grid-cols-2 p-6 gap-8'>

           <div className='bg-slate-400 rounded-md p-8'>
            <h3 className='text-3xl py-4 py-12 font-bold'>Latest Collection</h3>
            <button className='btn btn-primary'>
            <Link to='/latest'> Visit Category</Link>
            </button>
           </div>

           <div className='bg-red-300 p-6 py-12 rounded-md' > 
            <h3 className='text-3xl py-4 font-bold '>React</h3>
            <button className='btn btn-primary'>
               <Link to='/react-books'> Visit Category</Link>
            </button>
            </div>

           <div className='bg-orange-300 p-6 py-12  rounded-md'>
           <h3 className='text-3xl py-4 font-bold'>JavaScript</h3>
            <button className='btn btn-primary'>Visit Category</button>
           </div>

           <div className='bg-yellow-300 p-6 py-12 rounded-md'>
           <h3 className='text-3xl  py-4 font-bold'>Python</h3>
            <button className='btn btn-primary'>
                Visit Category
            </button>
           </div>
        </div>
    );
};

export default Categories;