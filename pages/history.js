import Layout from '../components/Layout'
import Product from '../components/Product'
import User from '../components/User'
import Token from '../components/Token'
import Link from 'next/link'

import 'isomorphic-fetch' /* So fetch works in the server and the browser */


  
export default class extends React.Component {
 static async getInitialProps() {
   const req = await fetch(`https://aerolab-challenge.now.sh/user/history`,{
        method: 'GET',
        headers:  {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': Token
  }})
   const products = await req.json()
   console.log(products)
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
         <button ><Link prefetch href="/">Ir al inicio</Link></button>
        <div className="contenedor_sort_by">
        <span className="leyeda_sortby">Ordenar por: </span> 
        <span className="sort_by" onClick={() => this.OrdenarPorPrecioAsc(this.props.products,'cost')}>Menor precio</span>
        <span className="sort_by" onClick={() => this.OrdenarPorPrecioDesc(this.props.products,'cost')}>Mayor precio</span></div>

     { this.props.products.map((product) => (
       
      <Product puntos={this.props.user.points} {...product}/>
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
       .cajas{
   	    float: left;
 	width: calc(33% - 40px);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
     height: auto;
margin: 20px;
  text-align: center;
  font-family: arial;
  
  }
   .con-cajas{
   display: flex;
   align-items: center;
   justify-content: center;
 }
 img{
 	width:100%;
 }
 .detalle{
 	margin: 24px 0;
 }
 .menu{
    font-family:verdana,arial;  
            font-size:11pt;  
            text-align:center;  
            padding: 10px 5px 10px 5px;    /* margen con valores: arriba - derecha - abajo - izquierda */   
            top: 0px;                    /* Distancia hasta el borde superior */  
    left: 0px;            /* Distancia hasta el borde izquierdo */ 
        width:100%;  
        background-color:#FCAF62;   
        z-index: 1;               /* hace que la capa sea opaca  */  
 }
 .card {
 	float:right;

 	width: calc(33% - 40px);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
     height: auto;
margin: 20px;
  text-align: center;
  font-family: arial;
}

.title {
  color: grey;
  font-size: 18px;
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