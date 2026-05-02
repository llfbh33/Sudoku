import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Layout from './components/Layout/Layout';
import SudokuPage from './components/SudokuPage/SudokuPage';
import './App.css'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {path: '/', element: <SudokuPage />},
    ]
  }
])

function App() {
  // const [count, setCount] = useState(0)

  return (
    <RouterProvider router={router} />
  )
};

export default App;
