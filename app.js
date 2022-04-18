document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid')
    const width = 8
    const squares = []

    const candyColors = [
        'red',
        'purple',
        'blue',
        'yellow',
        'orange',
        'green'
    ]

    function createBoard() {
        for (let i = 0; i < width*width; i++) {
            const square = document.createElement('div')
            let randomColor = Math.floor(Math.random() * candyColors.length)
            square.style.backgroundColor = candyColors [randomColor]
            grid.appendChild(square)
            squares.push(square)
        }
    }
    createBoard()
})