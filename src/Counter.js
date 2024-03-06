import React from 'react'
import { incHandler,decHandler } from './redux/action'
import { useDispatch, useSelector } from 'react-redux'

function Counter() {
    let dispatch=useDispatch()
    let x=useSelector((data)=>{
        return data.Counter
    })
    
  return (
    <div>
        <div>
        <h1>inc:{x.inc}</h1>
        <h1>dec:{x.dec}</h1>
        </div>
        
      <button onClick={()=>dispatch(incHandler())}>Increment</button>
      <button onClick={()=>dispatch(decHandler())}>Decrement</button>
    </div>
  )
}

export default Counter
