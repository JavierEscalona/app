import 'isomorphic-fetch'
import Link from 'next/link'

export default ({cost,puntos,_id})=>{
   
    return(

       <span className="span_redeem"> <Link prefetch href={ `/redeem?id=${_id}` }><a className="comprar">
             {calcularPuntos(cost,puntos)}</a></Link>
        <style jsx>{`
        .span_redeem{
            position: relative;
            height: -webkit-fill-available;
            width: -webkit-fill-available;
            float: left;    
        }
        .comprar{
            opacity: 0;
            position: inherit;
            float: left;
            height: inherit;
            width: inherit;
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


</span>

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