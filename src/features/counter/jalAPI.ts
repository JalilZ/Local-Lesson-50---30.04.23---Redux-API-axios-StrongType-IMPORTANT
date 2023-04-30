//API 
import axios from 'axios'
export function getProducts() {
    return new Promise<{ data: any[] }>((resolve) =>    //any[] means any type of array
    // //   setTimeout(() => resolve({ data: 'jalil' }), 500)
    axios.get('http://localhost:5000/products').then(res => resolve({ data: res.data}))

    //works also:
    // let res = axios.get('http://localhost:5000/products')
    // return res
    );
  }
  