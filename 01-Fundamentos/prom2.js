function sumSlow(n) {

    console.log("Sumar Lento =>" + n);

    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(n += 1)
        }, 800);
    });
}

let sumQuick = (n) => {

    console.log("Sumar Rapido =>" + n);

    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(n += 1), 300);
    });
}


sumQuick(8).then(sumSlow).then(sumQuick).then(sumSlow)

sumQuick(5)
sumSlow(5)

Promise.all([sumSlow(8), sumQuick(12)])
    .then(respuestas => console.log(respuestas))
    .catch(console.log)