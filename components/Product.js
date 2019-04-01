import 'isomorphic-fetch'
import functions from '../components/functions'
import ButtonRedeem from '../components/ButtonRedeem'


export default ({_id,name,cost,img,puntos})=>{
   
    return(
       
        <div className="cajas" key={ _id } onMouseMove={()=>{console.log("muse meon")}}>
         <h2><a href="#">{ name }</a></h2>
         
         <img src={ img.url }/>
         
         <p className="costo_puntos">
         <img src='../static/icons/coin.svg'></img> { cost } puntos
        </p>
         <ButtonRedeem cost={cost} puntos={puntos} _id={_id}></ButtonRedeem>
         
         <style jsx>{`
          .cajas img{
            width:100%;
          }
          .costo_puntos{
            
              font-size: 22px;
            color: black;  
          }
          .costo_puntos img{
            box-sizing: border-box;
            height: 30px;
          }

         .cajas{ 
             float: left;
       width: calc(24% - 40px);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 300px;
       height: auto;
  margin: 20px;
    text-align: center;
    font-family: arial;
    
    }


    .comprar{
      opacity: 0;
    }
    .comprar:hover{
      opacity: 1;
      content: 'Comprar fahora';
    }
     .con-cajas{
     display: flex;
     align-items: center;
     justify-content: center;
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
        `}</style>

</div>

    )
}

