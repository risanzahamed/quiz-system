import React from 'react';

const Blog = () => {
    return (
        <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-5 p-5 '>
            <div className='shadow-lg p-8 m-4 '>
            <h1 className='text-2xl'>What is the purpose of React Router?</h1>
            <p className='text-xl mt-4'>ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
            </div>
            <div className='shadow-lg p-8 m-4 '>
            <h1 className='text-2xl'>How does Context Api Works?</h1>
            <p className='text-xl mt-4'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div>
           <div className='shadow-lg p-8 m-4 '>
           <h1 className='text-2xl'>What is UseRef?</h1>
            <p className='text-xl mt-4'>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
           </div>
        </div>
    );
};

export default Blog;