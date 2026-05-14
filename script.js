let scrollScene = document.querySelector('.scroll-scene')
let topHalf = document.querySelector('.top-half')
let bottomHalf = document.querySelector('.bottom-half')

// Scroll listener — adds/removes classes only, CSS handles all animation
// learnt from class site
window.addEventListener('scroll', () => {
    let sceneTop = scrollScene.offsetTop
    let sceneHeight = scrollScene.offsetHeight
    let scrolled = window.scrollY - sceneTop
    let progress = scrolled / sceneHeight

    if (progress >= 0.25) {
        topHalf.classList.add('is-split')
        bottomHalf.classList.add('is-split')
    } else {
        topHalf.classList.remove('is-split')
        bottomHalf.classList.remove('is-split')
    }
})
