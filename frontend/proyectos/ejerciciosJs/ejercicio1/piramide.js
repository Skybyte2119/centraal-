var base = prompt("Escribe el numero de pisos de la piramide");
function generarpiramide(base){
    for (i=1; i<=base; i++){
        for (j=0; j<i; j++){
            document.write(":v");
        }
        document.write("<br>");
    }
}
generarpiramide(base);