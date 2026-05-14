let scrollScene = document.querySelector('.scroll-scene')
let splitWrapper = document.querySelector('.split-wrapper')

// Scroll listener — adds/removes classes only, CSS handles all animation
// learnt from class site
window.addEventListener('scroll', () => {
    let sceneTop = scrollScene.offsetTop
    let sceneHeight = scrollScene.offsetHeight
    let scrolled = window.scrollY - sceneTop
    let progress = scrolled / sceneHeight

    // split head open after scrolling 25% into the scene
    if (progress >= 0.25) {
        splitWrapper.classList.add('is-split')
    } else {
        splitWrapper.classList.remove('is-split')
    }
})
