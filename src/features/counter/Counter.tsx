import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  decrement,
  increment,
  increment3,                  //ex2 import this action from slicer.ts
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
  selectCount5,              //ex4 import this variable, and use useAppSelector below
} from './counterSlice';
import styles from './Counter.module.css';

//note on ex5.2: we can use the jalSlice on other GUI.tsx's, see for example in the GUI Counter.tsx
import {
  login,
  logout,
  selectLogged
} from './jalSlice';

export function Counter() {
  const count = useAppSelector(selectCount);
  const bigger5 = useAppSelector(selectCount5);
  const isLogged = useAppSelector(selectLogged); //ex5.2
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      {isLogged ?  <button onClick={() => dispatch(logout())}>LOGIN-ex5.2</button> : <button onClick={() => dispatch(login())}>LOGOUT-ex5.2</button>}
      <br/>
      {bigger5 ? 'True': 'False'}
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <button                                //ex2
          className={styles.button}
          style={{backgroundColor: 'red'}}
          aria-label="Increment value by 3"
          onClick={() => dispatch(increment3())}
        >
          +++EX2
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
}
