import './App.css';
import Account from './components/Account';
import Bonus from './components/Bonus';
import { useSelector } from 'react-redux'
function App() {
  const amount = useSelector(state=>state.account.amount)
  const bonus = useSelector(state=>state.bonus.bonus)
  return (
    <>
      <div className="App">
        <h4>App</h4>
        <h3>current Amount:{amount} </h3>
        <h3>Total Bonus : {bonus}</h3>
      </div>
      <Account/>
      <Bonus/>
    </>
  );
}

export default App;
