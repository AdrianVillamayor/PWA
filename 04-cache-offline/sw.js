const CACHE_STATIC = 'static_v2';
const CACHE_DYNAMIC = 'dynamic_v1';
const CACHE_INMUTABLE = 'inmutable_v1';
const CACHE_LIMIT = 50;

function cleanCache(cacheName, nItems) {
    caches.open(cacheName).then(cache => {
        return cache.keys()
            .then(keys => {
                if (keys.length > nItems) {
                    console.log("Clean Cache");
                    cache.delete(keys[0])
                        .then(cleanCache(cacheName, nItems))
                }
            })
    })
}

self.addEventListener('install', e => {

    const cachesSProm = caches.open(CACHE_STATIC)
        .then(cache => {
            return cache.addAll([
                '/',
                '/index.html',
                '/css/style.css',
                '/enjuto.jpg',
                '/img/main.jpg',
                '/pages/404.html',
                '/js/app.js'
            ])
        })
        .catch(console.error)

    const cachesIProm = caches.open(CACHE_INMUTABLE)
        .then(cache => {
            return cache.addAll([
                'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css',
            ])
        })
        .catch(console.error)

    let cachesProm = Promise.all([cachesIProm, cachesSProm]);

    e.waitUntil(cachesProm);
});

self.addEventListener('fetch', e => {

    //* 1- Cache Only
    // e.respondWith(caches.match(e.request))

    //* 2- Cache Network fallback (* 3- DYNAMIC)
    // const cacheProm = caches.match(e.request)
    //     .then(res => {

    //         if (res) return res;

    //         console.log(`No existe ${e.request.url}`);

    //         return fetch(e.request)
    //             .then(newRes => {

    //                 caches.open(CACHE_DYNAMIC)
    //                     .then(cache => {
    //                         cleanCache(CACHE_DYNAMIC, 50)
    //                         cache.put(e.request, newRes)
    //                     })

    //                 return newRes.clone()
    //             });
    //     })

    //* 4- Network Cache fallback

    // const ncf = fetch(e.request)
    //     .then(res => {
    //         if (!res) return caches.match(e.request);

    //         caches.open(CACHE_DYNAMIC)
    //             .then(cache => {
    //                 cache.put(e.request, res);
    //                 cleanCache(CACHE_DYNAMIC, CACHE_LIMIT);
    //             })

    //         return res.clone()
    //     }).catch(err => {
    //         return caches.match(e.request);
    //     });


    // e.respondWith(nfc)

    //* 5- Cache Network update

    // if(e.request.url.includes("bootstrap")) return e.respondWith(e.request);

    // const cacheProm = caches.open(CACHE_STATIC).then(cache => {
    //     fetch(e.request).then(newRes =>{
    //         cache.put(e.request, newRes);

    //         return cache.match(e.request);
    //     })
    // })

    // e.respondWith(cacheProm)

    //* 6- Cache Network Race

    const cacheProm = new Promise((resolve, reject) => {
        var rechazada = false;
        const fallo = () => {
            if (rechazada) {
                if (/\.(png|jpg|jpeg|gif|svg)$/i.test(e.request.url)) {
                    resolve(caches.match("/enjuto.jpg"))
                }else{
                    reject("File 404");
                }
            } else {
                rechazada = true;
            }
        };

        fetch(e.request).then(res => {
            res.ok ? resolve(ok) : fallo();
        }).catch(fallo)

        caches.match(e.request).then(res => {
            res ? resolve(res) : fallo();
        }).catch(fallo)
    })

    e.respondWith(cacheProm)

});