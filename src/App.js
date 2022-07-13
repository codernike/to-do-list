import React from 'react'
import Footer from './compoents/footer'
import Navbar from './compoents/navbar'
import TodoList from './compoents/todolist'
 
export default function App() {
  return (
    <>
     <Navbar/>
     <div className='d-flex flex-column min-vh-100 '>
        <div className='flex-fill'>
            <TodoList/>
        </div>
     </div>
      <Footer/>
    </>
  )
}
