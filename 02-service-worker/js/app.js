

if (navigator.serviceWorker) {
    console.log("Service Worker ON");

    navigator.serviceWorker.register('/sw.js')
}else{
    console.error("Service Worker OFF");
}
