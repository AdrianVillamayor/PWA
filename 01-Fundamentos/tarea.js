// Tarea sobre promesas y fetch
// Realice resolución de cada ejercicio,

// compruebe el resultado en la consola y posteriormente
// siga con el siguiente.

// Comente TODO el código del ejercicio anterior
// antes de continuar con el siguiente.

// ==============================================
// Ejercicio #1
// ==============================================
/*
 Realizar un llamado FETCH a la siguiente API
 Imprima en consola el nombre y género de la persona.
*/

let url = "https://swapi.dev/api/people/1/";

// Resolución de la tarea #1

fetch(url)
    .then(resp => resp.json())
    .then(respon => {
        console.log(respon)
        var li0 = document.createElement("li");
        var li1 = document.createElement("li");
        var li2 = document.createElement("li");

        li0.textContent = `Nombre => ${respon.name}`;
        li1.textContent = `Genero => ${respon.gender}`;
        li2.textContent = `Altura => ${respon.height}`;

        let ul = document.getElementsByClassName("pnj")[0];
        ul.append(li0)
        ul.append(li1)
        ul.append(li2)
    })
    .catch(error => {
        console.error(error)
    })




// ==============================================
// Ejercicio #2
// ==============================================
/*
 Similar al ejercicio anterior... haga un llamado a la misma api
 (puede reutilizar el código )
 https://swapi.dev/api/people/1/
 
 Pero con el nombre y el género, haga un posteo
 POST a: https://reqres.in/api/users

 Imprima en consola el objeto y asegúrese que tenga
 el ID y la fecha de creación del objeto
*/

// Resolución de la tarea #2

fetch(url)
    .then(resp => resp.json())
    .then(respon => {
        let user = {
            "Nombre": respon.name,
            "Genero": respon.gender
        }
        fetch("https://reqres.in/api/users", {
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
    })
    .catch(error => {
        console.error(error)
    })