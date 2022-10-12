import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const QuizDetails = () => {
    const quizDetail = useLoaderData([])
    const { name,total,questions} = quizDetail.data

    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
                <div className="card-body p-0">
                    <h2 className='text-4xl mb-4 font-semibold '>Course Name: {name}</h2>
                    <p className='text-2xl mb-4 font-semibold'>Total Questions: {total}</p>
                    {
                        questions.map(question=> <Question
                        question={question}
                        />)
                    }
                
                </div>
            </div>
        </div>
    );
};

export default QuizDetails;