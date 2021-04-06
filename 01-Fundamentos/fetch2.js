console.log("Aloha Mundo 🍍");

let url = "https://reqres.in/api/users";


let get = fetch(url)
    .then(resp => {
        return resp.json()
    })
    .then(respObj => {
        console.log(respObj)
    })

let user = {
    nombre: "Adrii",
    edad: 24
}

let post = fetch(url, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            'Coneten-Type': "application/json"
        }
    })
    .then(resp => {
        return resp.json()
    })
    .then(respObj => {
        console.log(respObj)
    })
    .catch(console.error)


let imgage = document.getElementById("img");

let bob = fetch('afro_samurai.jpg')
    .then(resp => resp.blob())
    .then(img => {
        let path = URL.createObjectURL(img);
        imgage.src = path;
    })
    .catch(console.error)