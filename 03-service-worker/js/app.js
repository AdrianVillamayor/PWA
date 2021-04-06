if (navigator.serviceWorker) {
    console.log("Service Worker ON");

    navigator.serviceWorker.register('/sw.js')
        .then(reg => {
            // if (window.SyncManager) {
            //     reg.sync.register("kiraaa")
            // }


            Notification.requestPermission().then(result => {
                console.log(result);
                reg.showNotification('Aloha Mundo 🍍')
            })
        })


} else {
    console.error("Service Worker OFF");
}