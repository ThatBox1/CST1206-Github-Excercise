const headerChange = document.getElementById('header')
const footerChange = document.getElementById('footer')

const bannerChange = document.getElementById('banner')

const bodyChange = document.getElementById('body')

const subBody1 = document.getElementById('sub-body1')
const subBody2 = document.getElementById('sub-body2')

const buttonSort = document.getElementById('sort')

let isToggle = false;

footerChange.addEventListener('click', function () {
    isToggle = !isToggle;
    if (isToggle) {
        footerChange.classList.add('newColor')
    }
    else {
        footerChange.classList.remove('newColor')
    }
})

headerChange.addEventListener('click', function () {
    isToggle = !isToggle;
    if (isToggle) {
        headerChange.classList.add('newColor')
    }
    else {
        headerChange.classList.remove('newColor')
    }
})


bannerChange.addEventListener('mouseenter', function () {
    bannerChange.innerHTML = 'Welcome';
    bannerChange.classList.add('newColor1')
})

bannerChange.addEventListener('mouseleave', function () {
    bannerChange.innerHTML = 'BANNER';
    bannerChange.classList.remove('newColor1')
})

bodyChange.addEventListener('dblclick', function () {
    isToggle = !isToggle;
    if (isToggle) {
        bodyChange.classList.add('bodyChange')
    }
    else {
        bodyChange.classList.remove('bodyChange')
    }
})


buttonSort.addEventListener('click', function () {
    isToggle = !isToggle
    if (isToggle) {
        subBody1.classList.add('sub-body3')
        subBody2.classList.add('sub-body4')
    }
    else {
        subBody1.classList.remove('sub-body3')
        subBody2.classList.remove('sub-body4')
    }
})
console.log("test")