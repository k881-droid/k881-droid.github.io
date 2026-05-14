let splitTrigger = document.querySelector('.split-trigger')
let splitWrapper = document.querySelector('.split-wrapper')

// Observe a sentinel element placed one viewport down — learnt from class site
// When it enters view, the head splits open
let splitObserver = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
        splitWrapper.classList.add('is-open')
    } else {
        splitWrapper.classList.remove('is-open')
    }
})

splitObserver.observe(splitTrigger)
