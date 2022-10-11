import React from 'react';

const Options = ({option, question}) => {

    return (
        <div className=' mt- 10 align-middle text-center grid-rows-2'>
            <ol className='text-3xl'>
                {/* <li>{question}</li> */}
            {/* <li className='border text-xl m-10 align-middle justify-center text-center mt-3 '>{option}</li> */}
            {/* <input type="radio" name="" value={option} id={option} /> */}
            <button className='border p-5 text-xl m-5 align-middle justify-center text-left mt-3 '>{option}</button>
            </ol>
        </div>
    );
};

export default Options;