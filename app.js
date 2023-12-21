const boxes = Array.from(document.getElementsByClassName('box'));
const playText = document.getElementById('playText')
const spaces = [null, null, null, null, null, null, null, null, null];
const O_TEXT = "O";
const X_TEXT = "X";
let currentPlayer = O_TEXT;

console.log(boxes);

const drawBoard = () =>{
    boxes.forEach((box, index) => {
        let styleString = '';
        if (index < 3) {
            styleString += `border-bottom: 3px solid var(--purple);`;
        }
        if(index % 3 === 0){
            styleString += `border-right: 3px solid var(--purple);`;
        }
        if(index % 3 === 2){
            styleString += `border-left: 3px solid var(--purple);`;
        }
        if (index > 5) {
            styleString += `border-top: 3px solid var(--purple);`;
        }
       box.style = styleString;
       box.addEventListener('click', boxClicked)
    });
};

const boxClicked = (e) => {
    console.log('box clicked');
    const id= e.target.id;
    console.log(id);
    if(!spaces[id]){
        spaces[id] = currentPlayer;
        e.target.innerText = currentPlayer;

        if(playerHasWon()){
            playText.innertText = `${currentPlayer} has won!`;
            return; 
        }
        currentPlayer =currentPlayer === O_TEXT ? X_TEXT : O_TEXT;
    }
}

const playerHasWon = () => {
    if(spaces[0] === currentPlayer){
        if(spaces[1] === currentPlayer && spaces[2] === player){
            console.log(`${currenPlayer} wins up top`)
            return true;    
        }
        if(spaces[3] === currentPlayer && spaces[6] === player){
            console.log(`${currenPlayer} wins on the left`);
            return true;    
        }
     }
}

drawBoard();