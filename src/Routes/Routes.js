import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../Component/ErrorPage/ErrorPage'
import Home from '../Component/Home/Home'
import Root from '../Component/Root/Root'
import Quiz from '../Component/Quiz/Quiz'
import Topic from '../Component/Topic/Topic'
import QuizDetails from '../Component/QuizDetails/QuizDetails'
import Blog from '../Component/Blog/Blog'
import Statistics from '../Component/Statistics/Statistics'

export const router = createBrowserRouter([

  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Topic />,
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz')
      },
      {
        path: 'topic',
        element: <Topic/>,
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz')
      },
      {
        path:'blog',
        element:<Blog/>
      },
      {
      path:'statistics',
      element:<Statistics/>,
      loader: () => fetch('https://openapi.programming-hero.com/api/quiz')
      },
      {
        path: 'quiz/:id',
        element: <QuizDetails/>,
        loader: ({ params }) =>
          fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
      },
    ],

  }
])
