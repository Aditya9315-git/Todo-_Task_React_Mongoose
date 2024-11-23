import axios from 'axios'
import React, { useEffect, useState } from 'react'

const TodoList = () => {
    const [todo, settodo]= useState([])
    const Tododdata= async()=>{
        let response=await axios.get('http://localhost:3000/api/Taskget')
        settodo(response.data.user)
        console.log(response.data.user)
    }

    useEffect(()=>{
        Tododdata()
    },[])

   let deletetodo= async(id)=>{
    let response= await axios.delete(`http://localhost:3000/api/Taskdelete/${id}`)
    console.log(response)
    Tododdata();
   }

   
    

  return (
    <>
     <div className='p-5'>
            {   todo.map((task) => (

                    <div key={task._id } className='flex m-2 bg-gray-400'>
                        <div className='flex  font-semibold gap-10 p-3 text-gray-800' >
                        <p><span>Id</span> {task._id}</p>
                        <h3><span>Task</span> {task.Task}</h3> 
                        <p> <span>Task Description </span>{task.Description}</p> 
                        <p className='bg-white text-red-600 p-1 rounded-md'> {task.Status}</p>
                       <button className='p-2 bg-green-600 rounded-md hover:bg-green-400 text-white'onClick={() => deletetodo(task._id)}  > Delete</button>
                       <button className='p-2 bg-green-600 rounded-md hover:bg-green-400 text-white' >Edit</button>

                        </div>
                    </div>
                ))
            }
        </div>

    </>
  )
}

export default TodoList