//API 
import axios from 'axios'
import { Product } from '../../Product';
export function getProducts() {
    return new Promise<{ data: Product[] }>((resolve) =>    //any[] means any type of array
    // //   setTimeout(() => resolve({ data: 'jalil' }), 500)
    axios.get('http://localhost:5000/products').then(res => resolve({ data: res.data}))

    //works also:
    // let res = axios.get('http://localhost:5000/products')
    // return res
    );
  }
  

  export function addProducts(prod: any) {
    return new Promise<{ data: Product }>((resolve) =>    //any[] means any type of array
    axios.post('http://localhost:5000/products', prod).then(res => resolve({ data: res.data}))

    );
  }