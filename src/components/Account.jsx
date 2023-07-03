import { useState } from "react"
import {increment,decrement,incrementbyamount, incbym, getProducts} from "../actions"
import { useSelector,useDispatch, } from 'react-redux'
function Account() {
    const [value, setValue] = useState(0)
   const amount = useSelector(state=>state.account.amount)
   const stage = useSelector(state=>state.account.loading)
  console.log(stage)
    const dispatch = useDispatch()
  console.log()
  return (
    <>
      <div className="card">
        <div className="container">
            <h4>
                <b>Account components</b>
            </h4>
            <h3>Ammount:{amount}</h3>
            <button onClick={()=>dispatch(increment())}>Increment</button>
            <button onClick={()=>dispatch(decrement())}>Decrement</button>
            <input type="Number" value={value} onChange={(e)=>setValue(e.target.value)}/>
            <button onClick={()=>dispatch(incrementbyamount(+value))}>IncrementByValue</button>
            <button onClick={()=>dispatch(getProducts(2))}>{stage? "Loading":"request"}</button>
        </div>
      </div>
    </>
  )
}

export default Account
