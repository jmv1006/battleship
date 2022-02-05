import {initiateAttack, getUserSelectedCoordinates} from './game.js'

let carrier;
let battleship;
let cruiser;
let submarine;
let destroyer;

function userShipSelect() {
  carrier = document.getElementById('carrier');
  battleship = document.getElementById('battleship');
  cruiser = document.getElementById('cruiser');
  submarine = document.getElementById('submarine');
  destroyer = document.getElementById('destroyer');

  carrier.name = 'carrier';
  battleship.name = 'battleship'
  cruiser.name = 'cruiser';
  submarine.name = 'submarine';
  destroyer.name = 'destroyer';

  createShips(5, carrier);
  createShips(4, battleship);
  createShips(3, cruiser);
  createShips(3, submarine);
  createShips(2, destroyer);

  carrier.length = 5;
  battleship.length = 4;
  cruiser.length = 3;
  submarine.length = 3;
  destroyer.length = 2;

  function createShips(length, name) {
    for(let i = 0; i < length; i++) {
      const square = document.createElement('Div');
      name.appendChild(square)
      square.classList = 'startUpSquare';
    };
  };

  let shipClass = document.getElementsByClassName('ship')
  for(let i = 0; i < shipClass.length; i++) {
    shipClass[i].addEventListener("dragstart", dragStart);
  };

  let currentRotation = 'Vertical';
  let dragged;
  let shipLength;
  let shipName;
  let storedCoords = [[],[],[],[],[]];
  storedCoords[0].name = 'carrier';
  storedCoords[1].name = 'battleship';
  storedCoords[2].name = 'cruiser';
  storedCoords[3].name = 'submarine';
  storedCoords[4].name = 'destroyer';


  shipClass[0].name = 'carrier';
  shipClass[1].name = 'battleship';
  shipClass[2].name = 'cruiser';
  shipClass[3].name = 'submarine';
  shipClass[4].name = 'destroyer';

  document.getElementById('rotate').addEventListener('click', function() {
    if(currentRotation === 'Vertical') {
      currentRotation = 'Horizontal';
      carrier.id = 'carrierHorizontal';
      battleship.id = 'battleshipHorizontal';
      cruiser.id = 'cruiserHorizontal';
      submarine.id = 'submarineHorizontal';
      destroyer.id = 'destroyerHorizontal';

      let shipClass = document.getElementsByClassName('ship');
      shipClass[0].name = 'carrier';
      shipClass[1].name = 'battleship';
      shipClass[2].name = 'cruiser';
      shipClass[3].name = 'submarine';
      shipClass[4].name = 'destroyer';
      document.getElementById('shipsDisplay').id = 'shipsDisplayHorizontal'
    } else if(currentRotation === 'Horizontal') {
      currentRotation = 'Vertical';
      document.getElementById('carrierHorizontal').id = 'carrier';
      document.getElementById('battleshipHorizontal').id = 'battleship';
      document.getElementById('cruiserHorizontal').id = 'cruiser';
      document.getElementById('submarineHorizontal').id = 'submarine';
      document.getElementById('destroyerHorizontal').id = 'destroyer';
      document.getElementById('shipsDisplayHorizontal').id = 'shipsDisplay'
    };
  });

  function dragStart(e) {
    dragged = e.target;
    shipLength = e.path[0].length
    shipName = this.name;
  };

  const startUpBoardSquares = document.getElementsByClassName('startUpBoardSquare');
  for(let j = 0; j < startUpBoardSquares.length; j++) {
    startUpBoardSquares[j].addEventListener('dragenter', dragEnter);
    startUpBoardSquares[j].addEventListener('dragover', dragOver);
    startUpBoardSquares[j].addEventListener('dragleave', dragLeave);
    startUpBoardSquares[j].addEventListener('drop', drop);
  };
  

  function dragEnter(e) {
    e.preventDefault();
    if (e.target.className == "startUpBoardSquare") {
      
    }
  };
  
  function dragOver(e) {
    e.preventDefault();
    
  };
  
  function dragLeave(e) {
    
  };

  let shipsPlaced = 0;

  function drop(e) {
    e.preventDefault();
    let xLocation = this.coord1;
    let yLocation = this.coord2;
    let coords;
    let coordsArr;
    let shipArrPosition;
    addShipToBoard();
    shipsPlaced++;

    function addShipToBoard() {
      console.log(shipsPlaced)
      if(currentRotation === 'Vertical') {
        if(yLocation + (shipLength - 1) > 10){
          //do nothing
        } else {
          for(let i = 0; i < shipLength; i++) {
            coords = `${xLocation},${yLocation + i}`;
            coordsArr = [xLocation, (yLocation + i)];
            document.getElementById(coords).className = 'markedSquare';
            document.getElementById(shipName).style.display = 'none';
            shipArrPosition = storedCoords.findIndex(item => item.name == shipName);
            storedCoords[shipArrPosition].push(coordsArr);
          };
        };
      } else if(currentRotation === 'Horizontal') {
        if(xLocation + (shipLength - 1) > 10) {
          //do nothing
        } else {
          for(let i = 0; i < shipLength; i++) {
            coords = `${xLocation + i},${yLocation}`;
            coordsArr = [(xLocation + i), yLocation];
            document.getElementById(coords).className = 'markedSquare';
            document.getElementById(`${shipName}Horizontal`).style.display = 'none';
            shipArrPosition = storedCoords.findIndex(item => item.name == shipName);
            storedCoords[shipArrPosition].push(coordsArr);
          };
        };
      };

      let storedCoordsArr = [];
      if (shipsPlaced === 4) {
        for(let i = 0; i < storedCoords.length; i++) {
          storedCoordsArr.push(storedCoords[i])
        };
        getUserSelectedCoordinates(storedCoordsArr);
      };

    };
  };

};

function displayStartUpBoard(arr) {
  for(let i = 0; i < arr.length; i++) {
    const startBoardDOM = document.getElementById('startUpBoard');
    const square = document.createElement('div');
    startBoardDOM.appendChild(square);
    square.classList = 'startUpBoardSquare';
    square.id = arr[i];
    square.coord1 = arr[i][0]
    square.coord2 = arr[i][1]
  };
  document.getElementById('infoDisplay').innerText = 'USER, PLACE YOUR SHIPS!'
};

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


export {displayBoards, displayStartUpBoard, userShipSelect}