

if ( navigator.serviceWorker ) {
    navigator.serviceWorker.register('/sw.js');
}


// if ( window.caches ) {
//     caches.open('prueba-1')

//     caches.has('prueba-2').then(console.log)

//     // caches.delete('prueba-1').then(console.log)

//     caches.open('cache-v1').then( cache => {
//         // cache.add('/index.html')
//         cache.addAll([
//             '/index.html',
//             '/css/style.css',
//             '/enjuto.jpg',
//             '/pages/404.html'
//         ]).then(() => {
//             cache.put('index.html', new Response("Aloha mundo 🍍"))
//         })

//         cache.match('/pages/404.html')
//         .then( res => {
//             res.text().then(console.log)
//         })


//         cache.keys().then(console.log)
//     })
// }
