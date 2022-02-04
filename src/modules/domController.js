import {initiateAttack} from './game.js'

function displayBoards(arr1, arr2) {
    const userGrid = arr1.length
  
    for(let i = 0; i < userGrid; i++) {
      const userBoardDOM = document.getElementById('userBoard');
      const square = document.createElement('div');
      userBoardDOM.appendChild(square);
      square.classList = 'userSquare';
      square.parent = arr1[i].status;
      square.id = `u${arr1[i]}`;
      square.coord1 = arr1[i][0];
      square.coord2 = arr1[i][1];

      if(square.parent === 'T') {
        square.classList = 'markedSquare';
      };
    };
  
    
    const computerGrid = arr2.length;
  
    for(let i = 0; i < userGrid; i++) {
      const computerBoardDOM = document.getElementById('computerBoard');
      const square = document.createElement('div');
      computerBoardDOM.appendChild(square);
      square.classList = 'square';
      square.parent = arr2[i].status;
      square.id = `c${arr2[i]}`;
      square.coord1 = arr1[i][0];
      square.coord2 = arr1[i][1];

      if(square.parent === 'T') {
        square.status = 'T';
      };
    };
    activateBoardEventListeners();
    //make an array with user and computer square, add event listener to get its parent then pass those coordinates onto gameboard object
};

function activateBoardEventListeners() {
  const squareClassArr = document.getElementsByClassName('square');

  for(let i = 0; i < squareClassArr.length; i++) {
    squareClassArr[i].addEventListener('click', function () {
      const coord1 = this.coord1;
      const coord2 = this.coord2;
      const tempArr = []
      tempArr.push(coord1, coord2);
      initiateAttack(tempArr);
    })
  };
};


  export {displayBoards};