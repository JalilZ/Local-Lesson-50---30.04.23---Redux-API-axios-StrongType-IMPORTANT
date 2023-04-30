//ex3

import React from 'react'
// notice I don't need useAppDispatch (I am not sending any action)
import { useAppSelector } from '../../app/hooks'; 
// login will be determined based on the counter value, which is the selectCount (state.counter.value)
import {
    selectCount,
  } from './counterSlice';

const Counter10login = () => {
    const count = useAppSelector(selectCount); // using useAppSelector I will declare the variable under {count} variable
  return (
    <div>{count} {count >= 10?<button>Logout EX3</button>:<button>Loggin EX3</button>}</div>
  )
}

//will display this <Counter10login/> GUI in App.tsx
export default Counter10login