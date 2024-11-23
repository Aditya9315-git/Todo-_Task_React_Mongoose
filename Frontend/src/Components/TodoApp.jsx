import React, { useState } from 'react'
import axios from 'axios'
import TodoList from './TodoList'
// import TodoList from './TodoList'

const TodoApp = () => {

    const [Data,setData]=useState({
        Task:'',
        Description:'',
        Status:''
    })

  function handlechanges(e){
    // console.log(e.target.value)
    if(Data.length > 0){
      setData({...Data,[e.target.name]: [e.target.value].join('')})
    }
    
    
  }

  
  const handlesubmit= async (e)=>{
    e.preventDefault()

     try{
        const response= await axios.post('http://localhost:3000/api/Tasksave', Data)
        console.log(response)
        alert("task added")
        }catch(err){
        console.log(err)
     }
    
}

   

  return (
    <>
    <div className='h-[100vh] w-[100vw] bg-gray-900 flex justify-center items-center flex-col'>
        <div>
          <h1 className='text-white text-2xl text-center font-semibold font-sans p-5 bg-gray-600'>Todo App </h1>
            <div className='bg-blue-100 p-5'>
            <form className='flex flex-col' onSubmit={handlesubmit }>
                <input type="text"  placeholder='Enter Your Task' name='Task' onChange={handlechanges} className='pt-2 pr-40 text-xl p-2 m-2 rounded-md cursor-pointer'/>
                <input type="text"  placeholder='Task Description' name='Description' onChange={handlechanges} className='pt-2 pr-40 text-xl p-2 m-2 rounded-md cursor-pointer'/>
                <input type="text" className='pt-2 pr-40 text-xl p-2 m-2 rounded-md cursor-pointer' name='Status' onChange={handlechanges} placeholder='Status' />
                <button className='bg-blue-500 p-3 text-white rounded-md hover:bg-blue-400'>Add Task</button>
                </form>
                <TodoList/>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default TodoApp