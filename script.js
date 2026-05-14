let scrollScene = document.querySelector('.scroll-scene')
let splitWrapper = document.querySelector('.split-wrapper')

// IntersectionObserver to trigger head split — learnt from class site
let splitObserver = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
        splitWrapper.classList.add('is-open')
    } else {
        splitWrapper.classList.remove('is-open')
    }
}, {
    rootMargin: '0% 0% -60% 0%', // fires once user has scrolled well into the scene
})

splitObserver.observe(scrollScene)
