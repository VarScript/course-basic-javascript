let articles = [
    {name: 'Bici', cost: 3000},
    {name: 'Tv', cost: 2500},
    {name: 'Book', cost: 320},
    {name: 'Cell Phone', cost: 10000},
    {name: 'Laptop', cost: 20000},
    {name: 'Keyboard', cost: 500},
    {name: 'Headphones', cost: 1700},
];

//Metod 1

let filterArticles = articles.filter(function(article){
    return article.cost <= 500
});

//Metod 2

let nameArticle = articles.map(function(article){
    return article.name
});

console.log(nameArticle);