var usuarioElige = prompt("piedra, papel o tijera?"); 
var computadoraElige = Math.random(); 
if (computadoraElige <0,34){ 
    computadoraElige = "piedra"; 
}else if(computadoraElige <=0.67){ 
    computadoraElige = "papel"; 
}else{ 
    computadoraElige = "tijera"; 
} 
 
var comparar = function(eleccion1, eleccion2){ 
    if(eleccion1 === eleccion2){ 
        return "¡Es un empate!"; 
    } 
     
    if(eleccion1 === "piedra"){ 
        if(eleccion2 === "tijera"){ 
            return "piedra gana"; 
        }else{ 
            "papel gana"; 
        } 
    } 
     
    else if(eleccion1 === "papel"){ 
        if(eleccion2 === "piedra"){ 
            return "gana tijera"; 
        } 
        else{ 
            return "tijera gana"; 
        } 
    } 
    else if(eleccion1 === "tijera"){ 
        if(eleccion2 === "papel"){ 
            return "gana tijera"; 
        } 
        else{ 
            return "gana piedra"; 
        } 
         
    } 
     
} 
 
console.log(comparar(usuarioElige,ComputadorElige)); 