function sumar(numero) {
    var promesa = new Promise(function (resolve, reject) {

        if (numero > 7) {
            reject("Demasiado grande");
        }

        setTimeout(function () {
            resolve(numero += 1);
        }, 800)

    });

    return promesa;
}

sumar(5)
    .then(sumar)
    .then(sumar)
    .then(sumar)
    .then(newNumb => {
        console.log(newNumb);
    })
    .catch(error => {
        console.log(error);
    });