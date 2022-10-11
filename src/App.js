import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Routes'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     errorElement: <ErrorPage />,
//     element: <Root />,
//     children: [
//       { path: '/', element: <Home /> },
      
//       {
//         path: 'books',
//         element: <Books />,
//         loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
//       },


//       { path: '/about', element: <About /> },
//       { path: '/contact', element: <Contact /> }
//     ],

//   }

// ])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
