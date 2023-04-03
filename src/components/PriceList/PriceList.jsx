import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const PriceList = () => {
    const [prices, setPrices] = useState([]);

    useEffect(() => {
        fetch('prices.json')
            .then(res => res.json())
            .then(data => setPrices(data));
    }, [])
    return (
        <div className='mx-12'>
            <h2 className='text-5xl sm:text-3xl text-center text-purple-950 bg-purple-300 font-bold p-4 mt-5 rounded-md'>Awesome Affordable Prices</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 ">
                {
                    prices.map(price => <PriceCard
                        key={price.id} price={price}></PriceCard>)
                }

            </div>
        </div>
    );
};

export default PriceList;