import React from 'react';
import Options from '../Options/Options';

const Question = ({question}) => {
    console.log()
    const {correctAnswer, options} = question
    return (
        <div className='shadow-lg w-1/2 mt-8 p-8 mx-auto justify-center align-middle'>
            <div className='text-2xl font-semiboldbold  p-4'>Quiz: {question.question}</div>
            <div className='text-center align-middle justify-center'>
            {
                options.map(option=> <Options
                option={option}
                question={question}
                />)
            }
            </div>
        </div>
    );
};

export default Question;