import React from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
const StatisticsData = ({ quiz }) => {
  console.log(quiz)
  const { total, name } = quiz
  console.log(total)

  return (
    <div className='mt-10'>
      <h1>
        Course Name: {name} <br />
        Total Quiz: {total}
      </h1>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={quiz}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey= {name}/>
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey={total} stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    </div>


  );
};

export default StatisticsData;