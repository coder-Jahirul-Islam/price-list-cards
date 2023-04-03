import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = ({ price }) => {
    return (
        <div className="">

            <div className='bg-indigo-400 rounded-md  p-4 mt-5 flex flex-col'>
                <h2 className='text-center'>
                    <span className='text-purple-700 text-5xl font-extrabold'>{price.price}</span>
                    <span className='2xl font-semibold text-white'>/mon</span>
                </h2>
                <h5 className='text-center text-2xl font-bold my-5'>{price.name}</h5>
                <p className='font-bold text-white text-3xl text-left underline'>Features:</p>
                {
                    price.features.map((feature,idx) => <Feature
                    key={idx}
                    feature={feature}></Feature>)
                }
                <button className='w-full mt-auto bg-green-500 hover:bg-green-700 py-2 rounded-md text-white font-bold'>Buy Now</button>
            </div>
        </div>

    );
};

export default PriceCard;