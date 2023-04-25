function viajar(destino) {
    if (destino === 'Brasil') {
        console.log('Gire a la IZQUIERDA');
    } else if (destino === 'Argentina'){
        console.log("Gire a la DERECHA");
    } else {
        console.log('Nos Perdimos');
    }
}


console.log(Math.pow(3, 3));
viajar('Argentina');
viajar("Brasil");
viajar('Colombia');