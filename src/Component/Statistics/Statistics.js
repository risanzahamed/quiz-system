import React from 'react';
import { useLoaderData } from 'react-router-dom';
import StatisticsData from './StatisticsData/StatisticsData';

const Statistics = ({total}) => {
    const loaderData = useLoaderData()
    console.log(loaderData.data)
    return (
        <div className=' grid grid-cols-2 gap'>
            <div className="card-body flex justify-between">
                {
                    loaderData.data.map(quiz => <ul key={quiz.id}>
                            <StatisticsData key={quiz.id} quiz={quiz}
                            />
                    </ul>)
                }
            </div>
        </div>
    );
};

export default Statistics;