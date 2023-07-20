
const boardContainer = document.querySelector(".board");

let board = [];
for (let row = 1; row <= 8; row++) {

    for (let column = 1; column <= 8; column++) {


        board.push([row, column])

    }
}
console.log(board);

function buildchess() {

    const element = document.createElement("div");

    element.classList.add("box");

    return element
}

for (let i = 0; i < board.length; i++) {

    const items = buildchess();

    boardContainer.appendChild(items)

}

