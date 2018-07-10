function holaMundo(){
    console.log('Hola Mundo xdxdxd')
}

function herencia(dineroJuan, dineroJose, herencia){
    var mitadHerencia = herencia/2;
    console.log('mitadHerencia ', mitadHerencia);
    dineroJose = dineroJose + mitadHerencia;
    dineroJuan = dineroJuan + mitadHerencia;
    console.log('dineroJose' , dineroJose , 'dineroJuan' , dineroJuan);
    dineroTotal = dineroJose + dineroJuan;
    console.log('dineroTotal ' , dineroTotal );
}
//herencia(100,200,500);


function regano (numeroIncial, numeroFinal){
    for (var i = numeroIncial; i <= numeroFinal; i++ ) {
        console.log(i);

    }


}
//regano(1,200);

function tengoHambre (hambre){
    if(hambre == true){
        console.log('Estoy triste');

    }else{
        console.log('Estoy feliz');
    }

}
tengoHambre(false);
