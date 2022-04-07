self.addEventListener('install' , (event)=>{
    console.log("service worker is installed")
    event.waitUntil(
    caches.open("static")
    .then((Cache)=>{
        Cache.addAll([
           'https://akhil24-abd.github.io/ecommerce-website/',
           'https://akhil24-abd.github.io/ecommerce-website/images',
            'https://akhil24-abd.github.io/ecommerce-website/index.html',
            'https://akhil24-abd.github.io/ecommerce-website/css/style.css',
            'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css',
           'https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700&display=swap',
            'https://akhil24-abd.github.io/ecommerce-website/images/f-img-1.1.png',
            'https://akhil24-abd.github.io/ecommerce-website/images/f-img-1.2.png',
            'https://akhil24-abd.github.io/ecommerce-website/images/f-img-1.3.png',
            'https://akhil24-abd.github.io/ecommerce-website/images/f-img-1.4.png',
            'https://akhil24-abd.github.io/ecommerce-website/images/f-img-2.1.png',
            'https://akhil24-abd.github.io/ecommerce-website/images/f-img-2.2.png',
            'https://akhil24-abd.github.io/ecommerce-website/images/f-img-2.3.png',
            'https://akhil24-abd.github.io/ecommerce-website/images/f-img-2.4.png',
            'https://akhil24-abd.github.io/ecommerce-website/images/f-img-3.1.png',
            'https://akhil24-abd.github.io/ecommerce-website/images/f-img-3.2.png',
            'https://akhil24-abd.github.io/ecommerce-website/images/f-img-3.3.png',
            'https://akhil24-abd.github.io/ecommerce-website/images/f-img-3.4.png',
            'https://akhil24-abd.github.io/ecommerce-website/images/home-bg-1.jpg',
            'https://akhil24-abd.github.io/ecommerce-website/images/home-bg-2.jpg',
            'https://akhil24-abd.github.io/ecommerce-website/images/home-bg-3.jpg',
            'https://akhil24-abd.github.io/ecommerce-website/images/home-shoe-1.png',
            'https://akhil24-abd.github.io/ecommerce-website/images/home-shoe-2.png',
            'https://akhil24-abd.github.io/ecommerce-website/images/home-shoe-3.png',
            'https://akhil24-abd.github.io/ecommerce-website/images/home-text-1.png',
            'https://akhil24-abd.github.io/ecommerce-website/images/home-text-2.png',
            'https://akhil24-abd.github.io/ecommerce-website/images/home-text-3.png',
            'https://akhil24-abd.github.io/ecommerce-website/images/pic1.jpg',
            'https://akhil24-abd.github.io/ecommerce-website/images/pic2.jpg',
            'https://akhil24-abd.github.io/ecommerce-website/images/pic3.jpg',
            'https://akhil24-abd.github.io/ecommerce-website/images/product-1.png',
            'https://akhil24-abd.github.io/ecommerce-website/images/product-2.png',
            'https://akhil24-abd.github.io/ecommerce-website/images/product-3.png',
            'https://akhil24-abd.github.io/ecommerce-website/images/product-4.png',
            'https://akhil24-abd.github.io/ecommerce-website/images/product-5.png',
            'https://akhil24-abd.github.io/ecommerce-website/images/product-6.png',
        ]).catch((error)=>{
            console.log(error)
        })
    })
    );
})

self.addEventListener('activate' , ()=>{
    console.log("sw is Activated")
})


self.addEventListener('fetch', (event) => {
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