import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import './App.css';
import { actionCreators,State } from './state';


function App() {
  const dispatch=useDispatch();
  const amount=useSelector((state:State)=>state.bank)
  const {depositmoney,withdrawMoney,bankrupt}=bindActionCreators(actionCreators,dispatch)
  return (
    <div className="App">
      <h1>{amount}</h1>
      <button onClick={()=>depositmoney(1000)}>Deposit</button>
      <button onClick={()=>withdrawMoney(200)}>Withdraw</button>
      <button onClick={()=>bankrupt()}>Bankrupt</button>
    </div>
  );
}

export default App;
