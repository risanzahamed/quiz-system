import React from 'react';



const Home = () => {

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse z-0">
                    <img src="https://educal-react.vercel.app/assets/img/hero/hero-1.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='text-left mr-12'>
                        <h1 className="lg:text-6xl font-light lg:text-left sm:text-2xl sm:text-center sm:pt-14">Access 2700+</h1>
                        <h1 className="text-6xl font-bold pt-10 lg:text-left  sm:font-semibold sm:text-center">Online Tutorial From <br /> Top Instructor.</h1>
                        <p className="py-6 text-xl sm:text-center lg:text-left ">Meet university,and cultural institutions, who'll share their experience.</p>
                        {/* <button className="btn btn-primary">Get Started</button> */}
                    </div>
        
                </div>
                
            </div>
            
        </div>
    );
};

export default Home;