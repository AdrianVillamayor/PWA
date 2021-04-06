
// Ciclo de vida del SW

self.addEventListener("install", e => {
    console.log(e);

    // const instalacion = new Promise ((resolve, reject) => {
    //     resolve("Aloha")
    // })

    // e.waitUntil(instalacion)
    // self.skipWaiting();
})


// Activar SW
self.addEventListener("activate", e => {
    console.log(e);
})

// FETCH
self.addEventListener("fetch", e => {
    console.log(e);
})

// SYNC: recuperar la conexion
self.addEventListener("sync", e => {
    console.log(e);
    console.log(e.tag);
})

// PUSH 
self.addEventListener("push", e => {
    console.log(e);
})