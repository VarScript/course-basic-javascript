

var jugador = "papel" , pc = "piedra", resultado;


function ganador() {
    
    if (jugador === pc) {
        
        return resultado = "Empate";

    } else if (jugador === "piedra" && pc === "tijera" || jugador === "tijera" && pc === "papel" || jugador === "papel" && pc === "piedra") {
        return resultado = "Gana Jugador";
    } else {
        return resultado = "Gana Pc"
    }
    
}

console.log(ganador());

