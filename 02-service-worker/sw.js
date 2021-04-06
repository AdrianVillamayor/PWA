self.addEventListener('fetch', e => {

    e.respondWith(
        fetch(e.request)
        .then(resp => resp.ok ? resp : fetch('img/main.jpg'))
    );

})