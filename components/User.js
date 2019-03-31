import functions from '../components/functions'
import Link from 'next/link'

export default ({name,points})=>{
    return(
        <div className="menu">
        <h3>{name}</h3>
        <p>Puntos: {points}</p>

      
         <style jsx>{`
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
        `}</style>

</div>

    )
}