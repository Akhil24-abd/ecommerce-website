
    var urlsToCache=[
    "/images",
     "/index.html",
     "/css/style.css",
     "/sw.js",
     "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css",
     "https://cdnjs.com/libraries/font-awesome",
      "https://fonts.google.com/specimen/Nunito?query=nunito",
     "/images/f-img-1.1.png",
     "/images/f-img-1.2.png",
     "/images/f-img-1.3.png",
     "/images/f-img-1.4.png",
     "/images/f-img-2.1.png",
     "/images/f-img-2.2.png",
     "/images/f-img-2.3.png",
     "/images/f-img-2.4.png",
     "/images/f-img-3.1.png",
     "/images/f-img-3.2.png",
     "/images/f-img-3.3.png",
     "/images/f-img-3.4.png",
     "/images/home-bg-1.jpg",
     "/images/home-bg-2.jpg",
     "/images/home-bg-3.jpg",
     "/images/home-shoe-1.png",
     "/images/home-shoe-2.png",
     "/images/home-shoe-3.png",
     "/images/home-text-1.png",
     "/images/home-text-2.png",
     "/images/home-text-3.png",
     "/images/pic1.jpg",
     "/images/pic2.jpg",
     "/images/pic3.jpg",
     "/images/product-1.png",
     "/images/product-2.png",
     "/images/product-3.png",
     "/images/product-4.png",
     "/images/product-5.png",
     "/images/product-6.png",
    ]

    self.addEventListener("install", (event) => {
        console.log("service worker installted")
        event.waitUntil(
        caches.open("static")
        .then((cache) => {
        return cache.addAll(urlsToCache);
        })
        );
        });
    
self.addEventListener("activate" , ()=>{
    console.log("sw is Activated")
})


self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // The responce is in the cache
        if (response) {
          return response;
        }

        // No cache match, we attempt to fetch it from the network
        return fetch(event.request);
      }
    )
  );
});