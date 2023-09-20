import './App.css'
import { useState } from 'react';
function App() {
  const [toDos,setTodos] = useState([])
  const [toDo,setTodo] = useState('')

  return (
  
    <div className="app">
    <div className="mainHeading">
      <h1 >ToDo List</h1>
    </div>
    <div className="subHeading">
      <br />
    

    </div>
    <div className="input">
      <input value={toDo} onChange={(event)=>setTodo(event.target.value)} type="text" placeholder="🖊️ Add item..." />
      <i onClick={()=>{setTodos([...toDos,{id:Date.now(),
        text:toDo,status:false}]);setTodo('')}} className="fas fa-plus"></i>
    </div>
<div className="todos">
      {
        toDos.map((obj)=>{
          
      return(    <div className="todo" key={obj.id}> 
          <div className="left">
          <input onChange={(e)=>{
            setTodos(toDos.filter(obj2=>{
              if(obj2.id===obj.id){
                obj2.status=e.target.checked
              }
              return obj2
            }))



          }} value={obj.status} type="checkbox" name="" id="" />
          <p>{obj.text}</p>
        
          
   
          </div>
          <div className="right">
          <i onClick={(e)=>{
            setTodos(toDos.filter(obj3=>{
             
               
              
              return  obj3.id!==obj.id

            }))

          }} className="fas fa-times"></i>
          </div>
          </div>)
        })
      
}

{toDos.some((obj) => obj.status) && (
  
    <h2>Finished Tasks</h2>
    
  )}
{
toDos.map((obj)=>{ 

  if(obj.status){
 
   
    return(
   
    <h2 key={obj.id}> {obj.text}</h2>)
  }
  return null
})
}
    </div>
  </div>
  );
}

export default App;
