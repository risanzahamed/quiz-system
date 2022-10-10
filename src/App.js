import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Root from './Component/Root/Root';
import Home from './Component/Home/Home';
import About from './Component/About/About'
import Contact from './Component/Contact/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    children: [
      { path: '/', element: <Home /> },
      { path: '/home', element: <Home /> },
      { path: '/about', element: <About /> },
      {path:'/contact', element: <Contact/>}
    ],
    
  }

])
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
