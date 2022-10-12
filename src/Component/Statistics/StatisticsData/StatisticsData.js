import React from 'react';

const StatisticsData = ({quiz}) => {
    console.log(quiz)
    return (
        <div>
            <h1 className='text-3xl'>Total Quiz items: {quiz.total}</h1>
        </div>
    );
};

export default StatisticsData;