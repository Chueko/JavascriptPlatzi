var people=["juan","roberto","paul"];

function saludar(nombres){
    console.log(`Hy to: ${nombres}`);
}
saludar(people)
//auto is a class and can contain a function as atribute, in this case mostrarPropiedades returns atributes from a car
var auto={
    marca:"toyota",
    modelo:"Corola",
    annio:2020,
    mostrarPropiedades: function(){
    console.log(this.marca + " " + this.modelo + " " + this.annio)
}};
//a function that can be used as a constructor for a car
function miAuto(marca,modelo,annio){
    this.marca=marca;
    this.modelo=modelo;
    this.annio=annio;
}
//creates an array of cars, using the constructor function to create objects autoNuevo with the atributed passed by parameter on miAuto constructor function.
//prompt set a popup notification with text editable to set the parameters for the car to be created
var autos=[];
/* for(var i=0;i<5;i++){
    var marca=prompt("Ingrese la marca");
    var modelo=prompt("Ingrese el modelo");
    var annio=prompt("ingrese el Annio")
    var autoNuevo=new miAuto(marca,modelo,annio);
    autos.push(autoNuevo);
}
 */
//Set an array of articles, inside objects with name and cost
var articles = [
    {name: "Bike", cost:3000},
    {name:"Tv",cost:2500},
    {name:"Book",cost:350},
    {name:"cellphone",cost:10000},
    {name:"Radio",cost:500}
];
//returns an array with objects that match the condition
var articlesFiltered=articles.filter(function(article){
    return article.cost<=500;
})
//returns an array with all articles name in it
var articleName=articles.map(function(article){
    return article.name;
})
//find the article and returns the object that contains the .name==="objetive"
var  findArticle=articles.find(function(article){
    return article.name==="cellphone"
})
//returns articles names listed on console
articles.forEach(function(article){
    console.log(article.name)
})
var lowCost=prompt("Set value for low cost products to find");
//Checks for condition if exist at least one returns true, else return false
var lowCostArticles=articles.some(function(article){
    return article.cost<=lowCost;
})

if(lowCostArticles){
    var articlesFiltered=articles.filter(function(article){
        return article.cost<=lowCost;
    })
}else{
    console.log("There was not articles below $" + lowCost + " in the system")
}