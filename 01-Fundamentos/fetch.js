console.log("Aloha Mundo 🍍");

var request = new XMLHttpRequest();
let url = "https://api.github.com/users/adrianvillamayor/repos";

request.open("GET", url, true)
request.send(null);

request.onreadystatechange = function (state){
    console.log( request );

    if(request.readyState === 4 ){
        var respuesta = JSON.parse(request.response);
    }

    console.log( respuesta );
}