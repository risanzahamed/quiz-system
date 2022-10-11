import React from 'react';
import Options from '../Options/Options';
import { eye, EyeIcon } from '@heroicons/react/24/solid'

const Question = ({ question }) => {
    console.log()
    const { options, id} = question
    // console.log(correctAnswer)
    return (
        <div className='shadow-lg w-1/2 mt-8 p-8 mx-auto'>
            
                <label  htmlFor="my-modal" className="btn modal-button <EyeIcon/></div>">open modal</label>
                <input type="checkbox" id="my-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Correct Answer is : {question.correctAnswer}</h3>
                        <div className="modal-action">
                            <label htmlFor="my-modal" className="btn">Close</label>
                        </div>
                    </div>
                </div>
           
            <div className='text-2xl font-semiboldbold  p-4'>Quiz: {question.question}</div>
            <div className='text-center align-middle justify-center'>
                {
                    options.map(option => <Options
                        option={option}
                        question={question}
                    />)
                }
            </div>
        </div >
    );
};

export default Question;