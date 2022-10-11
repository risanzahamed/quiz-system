import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuiz from './SingleQuiz/SingleQuiz';

const Quiz = () => {
    const loaderData = useLoaderData()
    console.log(loaderData)
    const quizData = loaderData.data
    console.log(quizData)
    return (
        <div className='quiz'>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
            {quizData.map(quiz => (
          <SingleQuiz key={quiz.id} quiz={quiz} />
        ))}

            </div>
        </div>
    );
};

export default Quiz;