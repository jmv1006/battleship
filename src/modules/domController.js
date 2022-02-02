

function displayBoards(arr1, arr2) {
    const userGrid = arr1.length
  
    for(let i = 0; i < userGrid; i++) {
      const userBoardDOM = document.getElementById('userBoard');
      const square = document.createElement('div');
      userBoardDOM.appendChild(square);
      square.classList = 'userSquare';
      square.parent = 'User'
      console.log(square.parent)
      square.id = arr1[i];
    };
  
    
    const computerGrid = arr2.length;
  
    for(let i = 0; i < userGrid; i++) {
      const computerBoardDOM = document.getElementById('computerBoard');
      const square = document.createElement('div');
      computerBoardDOM.appendChild(square);
      square.classList = 'computerSquare';
      square.parent = arr2[i];
    };

    //make an array with user and computer square, add event listener to get its parent then pass those coordinates onto gameboard object
    
};

  export {displayBoards};