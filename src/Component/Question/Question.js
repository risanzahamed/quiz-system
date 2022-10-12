import React from 'react';
import Options from '../Options/Options';
import { eye, EyeIcon } from '@heroicons/react/24/solid'



const Question = ({ question }) => {
    const answer = (question.correctAnswer)
    // console.log(answer)
    const { options } = question

    const eyeClick = (answer) => {
        // console.log(answer)
        // alert( answer, "ami") 

        alert(  "Correct Ans is:" + ' '  + answer);

        
    }

    return (
        <div className='shadow-lg m-0 lg:w-1/2 mt-8 p-8 lg:mx-auto'>

            < a href="#my-modal-2" className="btn" > <EyeIcon onClick={() => eyeClick(answer)} className='h-10 w-10' /></a >
            <div className='lg:text-2xl text-xl mt-2 font-semiboldbold  lg:p-4'>Quiz: {question.question}</div>
            <div className='text-center align-middle justify-center'>
                {
                    options.map(option => <Options
                        option={option}
                        question={question}
                        eyeClick={eyeClick}
                        answer={answer}

                    />)
                }
            </div>
        </div >
    );
};

export default Question;