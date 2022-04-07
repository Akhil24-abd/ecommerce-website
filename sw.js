self.addEventListener('install' , (event)=>{
    console.log("service worker is installed")
    event.waitUntil(
    caches.open("static")
    .then((Cache)=>{
        Cache.addAll([
           '/',
           'https://akhil24-abd.github.io/burger-website/',
           'https://akhil24-abd.github.io/burger-website/images',
            'https://akhil24-abd.github.io/burger-website/index.html',
            'https://akhil24-abd.github.io/burger-website/css/style.scss',
            'https://akhil24-abd.github.io/burger-website/css/style.css',
            'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css',
            'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css',
            'https://akhil24-abd.github.io/burger-website/images/about-img.png',
            'https://akhil24-abd.github.io/burger-website/images/background.jpg',
            'https://akhil24-abd.github.io/burger-website/images/blog-1.jpg',
            'https://akhil24-abd.github.io/burger-website/images/blog-2.jpg',
            'https://akhil24-abd.github.io/burger-website/images/blog-3.jpg',
            'https://akhil24-abd.github.io/burger-website/images/burger-baner.png',
            'https://akhil24-abd.github.io/burger-website/images/home-bg.png',
            'https://akhil24-abd.github.io/burger-website/images/logo.png',
            'https://akhil24-abd.github.io/burger-website/images/pic-1.png',
            'https://akhil24-abd.github.io/burger-website/images/pic-2.png',
            'https://akhil24-abd.github.io/burger-website/images/pic-3.png',
            'https://akhil24-abd.github.io/burger-website/images/product-1.png',
            'https://akhil24-abd.github.io/burger-website/images/product-2.png',
            'https://akhil24-abd.github.io/burger-website/images/product-3.png',
            'https://akhil24-abd.github.io/burger-website/images/product-4.png',
            'https://akhil24-abd.github.io/burger-website/images/product-5.png',
            'https://akhil24-abd.github.io/burger-website/images/product-6.png',
            'https://akhil24-abd.github.io/burger-website/images/title-img.png',
            'https://akhil24-abd.github.io/burger-website/js/script'
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