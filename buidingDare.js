let brand = ['Chevrolet', 'Mazda', 'Nisan', 'Tesla', 'Toyota'];
let model = ['Spark', 'Cheroky', 'Sprat', 'Model X', 'Fortiuner'];
let year = [2000, 2021, 2022, 2018, 2019];

function myCar(brand,model,year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}

for (i = 0; i < brand.length && i < model.length && year.length; i++) {
    let newCar = new myCar(brand[i], model[i], year[i]);
    console.log(newCar);
}