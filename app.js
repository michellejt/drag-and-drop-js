const king = document.querySelector('.chess-piece')
const squares = document.querySelectorAll('.square')
const infoDisplay = document.querySelector('#info')

king.addEventListener('drag', dragging)
king.addEventListener('dragstart', dragStart)

squares.forEach(square => {
    square.addEventListener('dragover', dragOver)
    square.addEventListener('drop', dragDrop)
    square.addEventListener('dragenter', dragEnter)
    square.addEventListener('dragleave', dragLeave)
    square.addEventListener('dragend', dragEnd)
})

let beingDragged

function dragging() {
    infoDisplay.textContent = "You are dragging a " + beingDragged.id
}

function dragOver(e){
    e.preventDefault()
}

function dragStart(e) {
    beingDragged = e.target
}

function dragDrop(e) {
    console.log(e.target)
    e.target.append(beingDragged)
    e.target.classList.remove('highlight')
}

function dragEnter(e) {
    e.target.classList.add('highlight')
}

function dragLeave(e) {
    e.target.classList.remove('highlight')
}

function dragEnd(e) {
    e.target.classList.add('target')
    setTimeout(() => e.target.classList.remove('target'), 100)
    infoDisplay.textContent = ""
}

