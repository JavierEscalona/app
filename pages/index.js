import Layout from '../components/Layout'
import Product from '../components/Product'
import User from '../components/User'
import Token from '../components/Token'
import Link from 'next/link'

import 'isomorphic-fetch' /* So fetch works in the server and the browser */


  
export default class extends React.Component {
 static async getInitialProps() {
   const req = await fetch(`https://aerolab-challenge.now.sh/products`,{
        method: 'GET',
        headers:  {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': Token
  }})
   const products = await req.json()
  // console.log(products)
   const request = await fetch(`https://aerolab-challenge.now.sh/user/me`,{
        method: 'GET',
        headers:  {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': Token
  }})
  const user = await request.json()
   return { products,user }
    }

 
 render() {
    return <Layout title="Productos">
     
      <User {...this.props.user}>
       
      </User>
      
         <button ><Link prefetch href="/history">Historial de compras</Link></button>
        <div className="contenedor_sort_by">
        <span className="leyeda_sortby">Ordenar por: </span> 
        <span className="sort_by" onClick={() => this.OrdenarPorPrecioAsc(this.props.products,'cost')}>Menor precio</span>
        <span className="sort_by" onClick={() => this.OrdenarPorPrecioDesc(this.props.products,'cost')}>Mayor precio</span></div>



     { this.props.products.map((product) => (
       
      <Product key={product._id} puntos={this.props.user.points} {...product}/>
     )) }

    <style jsx>{`
    .leyeda_sortby{
    font-family: Helvetica; 
    font-weight: bold;

    }
      .contenedor_sort_by{
        width: 100%;
        height: 30px;
        padding: 15px;
        /*text-align: center;*/
      }
   .sort_by{
    font-weight: bold;
    padding:10px;
    margin: 10;
    background-color: #d2d2c6;
    border-radius: 10px;
    margin-left: 5px;
    margin-right: 5px;
    color: #292929;
    font-family: Helvetica; 
   }
.sort_by:hover{
    background-color: #FCAF62;
    cursor: pointer;
   }
button {
 border: none;
 outline: 0;
 display: inline-block;
 padding: 8px;
 color: white;
 background-color: #000;
 text-align: center;
 cursor: pointer;
 width: 100%;
 font-size: 18px;
}

a {
 text-decoration: none;
 font-size: 22px;
 color: black;
}

button:hover, a:hover {
 opacity: 0.7;
}
      `} </style>
  
   </Layout>
 }

OrdenarPorPrecioDesc(array, key){
  var ordenado = this.OrdenarPorPrecioAsc(array,key);
  ordenado.reverse();
  this.setState({products : ordenado})
	return ordenado;
}


 OrdenarPorPrecioAsc(array, key){
console.log(array)

var array = this.props.products || []
 var arr = array.sort(function (a, b) {
  if (a[key] > b[key]) {
    return 1;
  }
  if (a[key] < b[key]) {
    return -1;
  }
	// a must be equal t
  return 0;
});
this.setState({products : arr})
return arr;
 
}

}