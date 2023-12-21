const boxes = Array.from(document.getElementsByClassName('box'));
console.log(boxes);

const drawBoard = () =>{
    boxes.forEach((box, index) => {
        let styleString = '';
        if (index < 3) {
            styleString += `border-bottom: 3px solid var(--purple)`;
        }
        if(index %$ 3 === 0){
            styleString += `border-bottom: 3px solid var(--purple)`;
        }
    })
}