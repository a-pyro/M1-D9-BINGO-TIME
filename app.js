window.onload = function () {
    console.log('windwos is loaded');
    // 1) create the divs
    // 2) divs will have inside h4s
    // 4) h4s will have nums from 1 to 76 (innerText)
    // 5- i'll use the for loops i to create divs and the text inside h4s
    // 6 - append the cells to the board
    // 7- i need to style the the board and the cells
    // 8- create fire button
    // 9- create randomize number function
    // 10- update the board according to the random number


    // 1 - get reference to the board
    const bingoBoard = document.querySelector('#bingo-board');
    // array to store the fired numbers
    let firedNumbers = [];

    for (i = 1; i <= 76; i++) {
        // 2- creating the boardCell
        const boardCell = document.createElement('div');
        // 3- adding className
        boardCell.className = 'board-cell';
        // 4- setting the inner content of the boardCell
        // 4BIS the class is added to the h4 for future reference
        boardCell.innerHTML = `<h4 class='cell-value'>${i}</4>`;
        // 5 -  appending cell to the board
        bingoBoard.appendChild(boardCell)



    }

    //6- taking refererence to the button
    const fireButton = document.querySelector('#fire-button')





    // 7 - adding eventlistener to the button
    fireButton.addEventListener('click', function () {
        console.log('I can fire!!!'); // works
        //8- random number function
        let randomizeNumber = function () {
            return Math.ceil(Math.random() * 76);
            console.log(randomizeNumber()); //works

        }
        //9- in order to update the board i need to take reference to it (already did in the higher scope)


        // 10- call the randomizeNumber() and catch it's value
        const randomNumber = randomizeNumber();
        // EXTRA1: 
        // the value return should always be different
        // i need to store the first value fired 
        // then fire again and check if the new number is equal to the previous
        // if its it should be discarded and fire again
        // need to define a new function for this 

        // let firedNumbers = []; // moved to the top to retain the values
        const extraRandomNumber = function () {
            // first i fire the number
            const randomNumber = randomizeNumber();
            // check if the fired number already exists in the array of fired numbers
            // a loop is needed to iterate the fired numbers
            for (let element of firedNumbers) {
                if (element !== randomNumber) {
                    firedNumbers.push(randomNumber)
                } else {
                    // to the next iteration
                    continue;
                }
            }
            // now, each time i fire, i store that value in the array, unless is already present

            // now i need another loop to go through the firenumbers and check if the current fired number is there, if its not i should return another number and add it into the array
            firedNumbers.forEach((n) => {
                if (randomNumber === n) {

                }
            })



        }

        //11 highlight the number on the board (will need to be parsInted) which is equal to the randomizeNumber() and apply the css class .output-number to highlight it

        // taking reference to the array of board <h4> .cell-value has been added to the <h4> when dinamically generating boardcell
        const boardH4s = document.querySelectorAll('.cell-value')
        const arrayOfBoardValues = []
        console.log(boardH4s);

        // looping to get out the value (innertext) of the h4s
        for (let cellh4 of boardH4s) {
            arrayOfBoardValues.push(parseInt(cellh4.innerText))
        }
        console.log(arrayOfBoardValues); //works

        // I'm gonna need a loop to compare all the boardCells value with the random number
        for (let i = 0; i < arrayOfBoardValues.length; i++) {
            // che if the value equals the random number
            // if it does the css class to highlight it must be applied, else no
            if (arrayOfBoardValues[i] === randomNumber) {
                // then i must update the class of the div with the same index of this value
                // but first i need a reference to that array of divs
                // all the divs created via js have the class .board-cell
                const arrayOfBoardCells = document.querySelectorAll('.board-cell')
                // console.log(arrayOfBoardCells); //works
                arrayOfBoardCells[i].classList.add('output-number')
            }
        }

        // then i need also to reset the value of the random number or maybe not


    })


}