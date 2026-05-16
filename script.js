let scrollScene = document.querySelector('.scroll-scene')
let topHalf = document.querySelector('.top-half')
let bottomHalf = document.querySelector('.bottom-half')
let title = document.querySelector('.title')
let scrollHint = document.querySelector('.scroll-hint')
let bioText = document.querySelector('.bio-text')

// checks scroll position and adds/removes split class — learnt from class site
function checkSplit() {
    let sceneTop = scrollScene.offsetTop
    let sceneHeight = scrollScene.offsetHeight
    let scrolled = window.scrollY - sceneTop
    let progress = scrolled / sceneHeight

    if (progress >= 0.25) {
        topHalf.classList.add('is-split')
        bottomHalf.classList.add('is-split')
        title.classList.add('is-split')
        scrollHint.classList.add('is-split')
        bioText.classList.add('is-split')
    } else {
        topHalf.classList.remove('is-split')
        bottomHalf.classList.remove('is-split')
        title.classList.remove('is-split')
        scrollHint.classList.remove('is-split')
        bioText.classList.remove('is-split')
    }
}

window.addEventListener('scroll', checkSplit)
checkSplit() // run once on load to set correct initial state
