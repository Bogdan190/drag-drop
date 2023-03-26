
const box = document.querySelector('.box')
const offset = {}

box.onmousedown = handleClick
window.onmouseup = handleSecondClick

function handleClick(e){
    console.log(e)
    offset.x = e.offsetX
    offset.y = e.offsetY
    window.onmousemove = handleMove
}

function handleMove(e){
    box.style.top = e.y - offset.y + "px"
    box.style.left = e.x - offset.x + "px"
    box.innerText = `x: ${e.x} y: ${e.y}`
}

function handleSecondClick(){
    window.onmousemove = null
}


































// const box = document.querySelector('.box')
// const offset = {}

// box.onmousedown = handleClick
// window.onmouseup = handleSecondClick

// function handleClick(e){
//     offset.x = e.offsetX
//     offset.y = e.offsetY
//     window.onmousemove = handleMove
// }

// function handleMove(e){
//     box.style.top = e.y - offset.y + "px"
//     box.style.left = e.x - offset.x + "px"
//     box.innerText = `${e.x}: 30, ${e.y}:40`
// }

// function handleSecondClick(){
//     window.onmousemove = null

//     window.onclick = handleClick
// }