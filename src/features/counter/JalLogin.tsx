//ex5
import React from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks';

//note on ex5.2: we can use the jalSlice on other GUI.tsx's, see for example Counter.tsx

import {
    increment,
    decrement,
    selectCount,
    login,
    logout,
    selectLogged,
    getProductAsync, //API
    selectRes,   //API
  } from './jalSlice';


const JalLogin = () => {
    const count = useAppSelector(selectCount); // using useAppSelector I will declare the variable under {count} variable
    const isLogged = useAppSelector(selectLogged);
    const res = useAppSelector(selectRes); //API
    const dispatch = useAppDispatch();
  return (
    <div>
        <br/><br/>
        {isLogged ?  <button onClick={() => dispatch(logout())}>LOGIN-ex5.1</button> : <button onClick={() => dispatch(login())}>LOGOUT-ex5.1</button>}
        <br/>
        <button onClick={() => dispatch(decrement())}>-</button>
        JalLogin EX5.1: {count} 
        <button onClick={() => dispatch(increment())}>+</button>

        {/* GET products */}
        <button style={{backgroundColor: 'green'}} onClick={() => dispatch(getProductAsync())}>get Products JalLogin.tsx</button>
        <h1>{res.map(prod => <div key={prod.id}>{prod.id} {prod.desc} {prod.price}</div>)}</h1>
        
    </div>
  )
}

export default JalLogin