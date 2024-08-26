const revealEls = document.querySelectorAll('.reveal')

function isVisible(el) {
    const {top, bottom} = el.getBoundingClientRect()

    if (bottom<0 || top>window.innerHeight) {
        el.classList.remove('reveal_active')
    } else {
        setTimeout(()=>{el.classList.add('reveal_active')}, 200)
    }
    
}

window.addEventListener('scroll', ()=>{
    revealEls.forEach((el)=>{
        isVisible(el)
    })
});

