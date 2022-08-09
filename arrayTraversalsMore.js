let articles = [
    {name: 'Bici', cost: 3000},
    {name: 'Tv', cost: 2500},
    {name: 'Book', cost: 320},
    {name: 'Cell Phone', cost: 10000},
    {name: 'Laptop', cost: 20000},
    {name: 'Keyboard', cost: 500},
    {name: 'Headphones', cost: 1700},
];

//Find, nos genera un nuevo array en caso de que exista

let findArticle = articles.find(function(article) {
    return article.name === 'Laptop'
});

console.log(findArticle);

//ForEach, va solamente a regresar cosas, no crea un uvo array lo llamamos || otra definicion es: Ejecuta la función indicada una vez por cada elemento del array.

articles.forEach(function(article){
    console.log(`The cost is ${article.cost}`)
});

//some, Se va a generar un nuevo array, con una validacion de verdadero o falso para articulos que cumplan esa condicion, TRUE or FALSE

let cheapArticles = articles.some(function(article){
    return article.cost <= 1000;
});

console.log(cheapArticles);
