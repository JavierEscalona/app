import 'isomorphic-fetch'
import Link from 'next/link'

export default ({cost,puntos,_id})=>{
   
    return(

        <p><Link prefetch href={ `/redeem?id=${_id}` }><a className="comprar"><button>
             {calcularPuntos(cost,puntos)}</button></a></Link>
        <style jsx>{`
        .comprar{
                opacity: 0;
        }
                .comprar:hover{
                opacity: 1;
                content: 'Comprar fahora';
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

</p>

    )
}

function calcularPuntos(costo,puntos){
    if(costo<=puntos){
        return "Redeem Now!!";
      }else{
        var faltante = costo - puntos; 
        return "Faltan "+faltante+" puntos"
      }
}