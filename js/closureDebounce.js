const debounce = (func, delay) => {
    let inDebounce
    return function () {
        const context = this
        const args = arguments
        clearTimeout(inDebounce)
        inDebounce = setTimeout(() => func.apply(context, args), delay)
    }
}

const button = document.getElementById('button')
button.addEventListener('click', debounce(() => {
    console.log('Hey! It is', new Date().toUTCString());
}, 3000));
