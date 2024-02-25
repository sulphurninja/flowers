// components/PhoneNumberHeading.js
"use client"

import Link from 'next/link';
import React from 'react';

const PhoneNumberHeading = () => {
    const phoneNumber = '+918975531211'; // Replace with your desired phone number

    const handleClick = () => {
        window.location.href = `tel:${phoneNumber}`; x
    };

    return (
        <div>

            <h2 style={{ cursor: 'pointer' }} className='text-xl mt-2 font-bold ' onClick={handleClick}>
                Call us at: <span className='text-amber-400 animate-pulse '>{phoneNumber}</span>
            </h2>
            <Link href='/about'>
            <p className='font-mono text- mt-4'>
                Prasad Rakshe<br></br>Wholesale supplier - All Over India
            </p>
            </Link>
           

        </div>
    );
};

export default PhoneNumberHeading;
