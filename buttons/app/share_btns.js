const btnEl = document.querySelector(`.btn`);

const toggleOptions = () => {
    const wrapperEl = document.querySelector(`.wrapper`);
    const iconEl = btnEl.querySelector(`i`);
    
    wrapperEl.classList.toggle('active')

    iconEl.classList.contains('bx-share-alt') ? iconEl.classList.replace('bx-share-alt','bx-x') : iconEl.classList.replace('bx-x', 'bx-share-alt')
    // if( iconEl.classList.contains('ri-share-line') ){
    //     iconEl.classList.replace('ri-share-line','ri-close-line')
    // }
    // else {
    //     iconEl.classList.replace('ri-close-line','ri-share-line')
    // }

}
btnEl.addEventListener('click', toggleOptions)