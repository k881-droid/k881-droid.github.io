let scrollScene = document.querySelector('.scroll-scene')
let splitWrapper = document.querySelector('.split-wrapper')

// Scroll listener — adds/removes classes only, CSS handles all animation
// learnt from class site
window.addEventListener('scroll', () => {
    let sceneTop = scrollScene.offsetTop
    let sceneHeight = scrollScene.offsetHeight
    let scrolled = window.scrollY - sceneTop
    let progress = scrolled / sceneHeight

    // stage 1: grow — triggers as soon as scene starts
    if (progress >= 0) {
        splitWrapper.classList.add('is-growing')
    } else {
        splitWrapper.classList.remove('is-growing')
    }

    // stage 2: split — waits until 35% so grow CSS transition finishes first
    if (progress >= 0.35) {
        splitWrapper.classList.add('is-split')
    } else {
        splitWrapper.classList.remove('is-split')
    }
})
