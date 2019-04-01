 
export default class extends React.Component {
    constructor({_id,name,cost,img,puntos}){
        super({_id,name,cost,img,puntos});
        this.handleChange = this.handleChange.bind(this);
        // set initial state with enableActions = true  to make the checkbox checked by default
        this.state ={enableActions: true};
     }
     
 render() {
    <div className="cajas" key={ _id } onMouseOver={()=>{functions.mouseOver()}}>
    <h2><a href="#">{ this.props.user.name }</a></h2>
    <img src={ img.url }/>
    <p><Link prefetch href={ `/redeem?id=${this.props.product}` }><a>
      { this.props.user.cost } puntos
    </a></Link></p>
    <p><button>{functions.calcularPuntos(cost,puntos)}</button></p>

    <style jsx>{`
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

 }
 handleChange(e){
    {/* updates state with the current checked value of the checkbox */}
    this.setState({enableActions : e.target.checked});
  }
}