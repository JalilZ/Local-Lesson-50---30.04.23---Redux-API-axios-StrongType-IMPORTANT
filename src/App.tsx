import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Counter10login from './features/counter/Counter10login';
import JalLogin from './features/counter/JalLogin';
import { login } from './features/counter/loggedSlice';
import { useAppSelector, useAppDispatch } from './app/hooks';
import { addProductAsync, selectProducts, getProductAsync } from './features/counter/productSlice';


function App() {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);
  useEffect(() => {
    dispatch(getProductAsync())
  }, [])
  
  const [price, setprice] = useState(0)
  const [desc, setdesc] = useState("")

  return (
    <div className="App">
      <header className="App-header">
        {/* ex3 */}
        <Counter10login />
        {/* ex5 */}
        <JalLogin />
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        {/* proper login */}
        <div style={{backgroundColor: 'lightgreen'}}>
          Desc: <input onChange={(e) => setdesc(e.target.value)}/>
          Price: <input onChange={(e) => setprice(+e.target.value)}/>
          <button onClick={() => dispatch(login({ user: "jalil", pwd: "123" }))}>proper login</button>
          <button onClick={() => dispatch(addProductAsync({ desc: desc, price: price }))}>Add product</button>
          <button onClick={() => dispatch(getProductAsync())}>get products</button>
          {products.length}
          {products.map((prd, ind) => <div key={ind}>{prd.desc} {prd.price}</div>) }
        </div>
        
      </header>
    </div>
  );
}

export default App;
