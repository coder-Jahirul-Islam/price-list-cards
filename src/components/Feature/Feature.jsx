import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'


const Feature = ({ feature }) => {
    return (
        <div className='flex place-items-center'>
            <CheckCircleIcon class="h-5 w-5 sm:w-6 sm:h-6 md:h-7 md:w-7 text-purple-600 hover:text-green-500" />

            <span className='my-2 ml-2'>{feature}</span>

        </div>
    );
};

export default Feature;