let scrollScene = document.querySelector('.scroll-scene')
let splitWrapper = document.querySelector('.split-wrapper')

// Scroll listener — only adds/removes classes, CSS handles all animation
// learnt from class site
window.addEventListener('scroll', () => {
    let sceneTop = scrollScene.offsetTop
    let sceneHeight = scrollScene.offsetHeight
    let scrolled = window.scrollY - sceneTop
    let progress = scrolled / sceneHeight

    // stage 1: grow (0–30%)
    if (progress >= 0) {
        splitWrapper.classList.add('is-growing')
    } else {
        splitWrapper.classList.remove('is-growing')
    }

    // stage 2: split (15–70%)
    if (progress >= 0.15) {
        splitWrapper.classList.add('is-split')
    } else {
        splitWrapper.classList.remove('is-split')
    }
})
