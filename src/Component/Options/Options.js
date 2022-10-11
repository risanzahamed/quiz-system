import React from 'react';

const Options = ({ option, question, correctAnswer }) => {

    return (
        <div className=' mt- 10 align-middle text-center grid-rows-2'>
            <ol className='text-3xl'>
                {/* <button className='border p-5 text-xl m-5 align-middle justify-center text-left mt-3 '></button> */}

                <div className="form-control ">
                    <label className="label cursor-pointer">
                        <span className=" text-xl text-left">{option}</span>
                        <input type="radio" name="radio-6" className="radio checked:bg-red-500" checked />
                    </label>
                </div>
            </ol>
        </div>
    );
};

export default Options;








{/* <li>{question}</li> */ }
{/* <li className='border text-xl m-10 align-middle justify-center text-center mt-3 '>{option}</li> */ }
{/* <input type="radio" name="" value={option} id={option} /> */ }