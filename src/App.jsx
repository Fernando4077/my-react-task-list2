import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Task } from './components/Task'
import { TaskList } from './components/TaskList'
//import { TaskList } from './components/TaskList'


function App() {
 

  return (
    <>
      <div>
        <div><Header/></div>
        <div className='conteiner'><Task/></div>
        <div><TaskList/></div>
        
      </div>
    </>
  )
}

export default App
