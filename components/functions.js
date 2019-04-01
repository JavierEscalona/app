const functions = {
  calcularPuntos : function functions(costo,puntos) {

    if(costo<=puntos){
      return "Redeem Now!!";
    }else{
      var faltante = costo - puntos; 
      return "Faltan "+faltante+" puntos"
    }
  },
  mouseOver : function mouseOver(thiss){
    console.log(thiss)
  }
}


export default functions;