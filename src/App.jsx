import axios from 'axios'
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [users, setUsers] = useState([])
  const getUsers = async() => {
    try{
      const response = await axios('https://jsonplaceholder.typicode.com/todos/1/users')
      // console.log(response.data);
      setUsers(response.data)      
    }catch(error){
      console.error('Error fetching users: ' ,error);
    }
  }
  
  useEffect(() => {
    getUsers()
  },[])
  console.log(users[0]);
  

  return (
    <>
      <h1 className='text-blue-400 text-7xl' >API Call</h1>
      <div className="">
        {users.map((user) => {
          return (
          <div className="flex gap-3 items-baseline" key={user.id} >
            <h3 className='text-2xl' >{user.name}:</h3>
            <p>{user.email}</p>
          </div>
        )
        })}
      </div>
    </>
  )
}

export default App
