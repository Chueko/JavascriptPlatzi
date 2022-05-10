var people=["juan","roberto","paul"];

function saludar(nombres){
    console.log(`Hy to: ${nombres}`);
}
saludar(people)

var auto={
    marca:"toyota",
    modelo:"Corola",
    annio:2020,
    mostrarPropiedades: function(){
    console.log(this.marca + " " + this.modelo + " " + this.annio)
}};
function miAuto(marca,modelo,annio){
    this.marca=marca;
    this.modelo=modelo;
    this.annio=annio;
}
var autos=[];
for(var i=0;i<5;i++){
    var marca=prompt("Ingrese la marca");
    var modelo=prompt("Ingrese el modelo");
    var annio=prompt("ingrese el Annio")
    var autoNuevo=new miAuto(marca,modelo,annio);
    autos.push(autoNuevo);
}


