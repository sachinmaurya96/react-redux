import { incrementBonus } from '../actions'
import { useSelector,useDispatch } from 'react-redux'
function Bonus() {
  const point = useSelector(state=>state.bonus.bonus)
  const dispatch = useDispatch()
  return (
    <>
      <div className="card">
        <div className="container">
            <h4>
                <b>Bonus components</b>
            </h4>
            <h3>TotalBonus : {point}</h3>
            <button onClick={()=>dispatch(incrementBonus())}>Increment</button>
        </div>
      </div>
    </>
  )
}

export default Bonus
