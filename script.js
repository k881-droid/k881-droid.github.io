let splitScene = document.querySelector('.split-scene')
let splitWrapper = document.querySelector('.split-wrapper')

// IntersectionObserver to add/remove a class — learnt from class site
let splitObserver = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
        splitWrapper.classList.add('is-open')
    } else {
        splitWrapper.classList.remove('is-open')
    }
}, {
    rootMargin: '0% 0% -30% 0%', // fires a little after section enters view
})

splitObserver.observe(splitScene)
