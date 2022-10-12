import React from 'react';

const Options = ({ option, notify, answer }) => {
    

    return (
        <div className=' mt- 10 align-middle text-center grid-rows-2'>
            <ol className='text-3xl'>
                <div className="form-control ">
                    <label className="label cursor-pointer">
                        <span className=" text-xl text-left">{option}</span>
                        <input onClick={() => notify(answer)} type="radio" name="radio-6" className="radio checked:bg-red-500" checked />
                    </label>
                </div>
            </ol>
        
        </div>
    );
};

export default Options;