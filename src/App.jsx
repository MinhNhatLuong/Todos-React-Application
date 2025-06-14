import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CssBaseline from "@mui/material/CssBaseline";
import TodoList from './TodoList';
import NavBar from './NavBar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CssBaseline />
      <NavBar />
      <TodoList />
    </>
  )
}

export default App
