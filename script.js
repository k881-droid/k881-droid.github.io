let scrollScene = document.querySelector('.scroll-scene')
let topHalf = document.querySelector('.top-half')
let bottomHalf = document.querySelector('.bottom-half')
let title = document.querySelector('.title')
let scrollHint = document.querySelector('.scroll-hint')
let bioText = document.querySelector('.bio-text')
let mobileBio = document.querySelector('.mobile-bio')
let projects = document.querySelector('.projects')

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
        mobileBio.classList.add('is-split')
        projects.classList.add('is-split')
    } else {
        topHalf.classList.remove('is-split')
        bottomHalf.classList.remove('is-split')
        title.classList.remove('is-split')
        scrollHint.classList.remove('is-split')
        bioText.classList.remove('is-split')
        mobileBio.classList.remove('is-split')
        projects.classList.remove('is-split')
    }
}

window.addEventListener('scroll', checkSplit)
checkSplit() // run once on load to set correct initial state

// cursor tooltip — learnt from https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/tooltip_role
let tooltip = document.querySelector('.cursor-tooltip')
let tooltipName = document.querySelector('.cursor-tooltip-name')
let tooltipDesc = document.querySelector('.cursor-tooltip-desc')
let cards = document.querySelectorAll('.project-card')

cards.forEach(function(card) {
    card.addEventListener('mouseenter', function() {
        tooltipName.textContent = card.querySelector('.card-name').textContent
        tooltipDesc.textContent = card.querySelector('.card-desc').textContent
        tooltip.classList.add('is-active')
    })

    card.addEventListener('mousemove', function(e) {
        tooltip.style.setProperty('--x', e.clientX + 16 + 'px')
        tooltip.style.setProperty('--y', e.clientY + 16 + 'px')
    })

    card.addEventListener('mouseleave', function() {
        tooltip.classList.remove('is-active')
    })
})
