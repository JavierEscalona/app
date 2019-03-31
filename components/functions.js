
function functions(costo,puntos) {

  if(costo<=puntos){
    return "comprar";
  }else{
    var faltante = costo - puntos; 
    return "Faltan "+faltante+" puntos"
  }
}

export default functions;