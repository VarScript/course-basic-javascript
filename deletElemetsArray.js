
//Para agregar elementos en un array con .push()

let numArray = [1, 2,3,4,5]

function newNum(){

    numArray.push(6,7)
    console.log(numArray)
}

console.log(newNum())


//Eliminar PRIMER ELEMENTO de un array con .shift()

let array = [1,2,3,4,5]

console.log(array)

let shiftArray = array.shift()

console.log(array)

//Eliminar SEGUNDO ELEMENTO de un array con .pop()

let array2 = [1,2,3,4,5]

console.log(array2)

let shiftArray2 = array2.pop()

console.log(array2)