import React from 'react';

const SingleQuiz = ({ quiz }) => {
    console.log(quiz)
    const { name, logo } = quiz
    return (
        <div className=' grid grid-cols-2 gap'>
            <div className="card bg-slate-400 card-compact w-96 bg-base-100 shadow-xl">
                <div>
                    <img src={logo} alt="" />
                </div>
                <div className="card-body flex justify-between">
                    <div>
                        <h2 className="card-title">{name}</h2>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Start Quiz</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleQuiz;