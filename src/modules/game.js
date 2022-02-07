import { displayBoards, displayStartUpBoard, userShipSelect, activateBoardEventListeners } from "./domController.js";

const ship = (shipLength, hitLocations, sunkStatus, coordinates) => {
  for (let i = 0; i < shipLength; i++) {
    hitLocations.push(i);
  }

  const sinkShip = () => {
    obj.sunkStatus = "Sunk";
  };

  const hit = (pos) => {
    hitLocations.splice(pos, 1, "X");
    isSunk();
  };

  const isSunk = () => {
    const allEqual = (arr) => arr.every((val) => val === arr[0]);
    const result = allEqual(hitLocations);

    if (result == true) {
      obj.sunkStatus = "Sunk";
    }
  };

  const assignCoordinates = (arr) => {
    obj.coordinates = arr;
  };
  const obj = {
    shipLength,
    hitLocations,
    sunkStatus,
    hit,
    assignCoordinates,
    coordinates,
    sinkShip,
  };
  return obj;
};

let carrier;
let battleship;
let cruiser;
let submarine;
let destroyer;

let computerBoard;
let computer;
let user;
let userBoard;

let isHit;
let currentPlayer;
//<----- Gameboard factory ----->
const gameboard = (
  carrier,
  destroyer,
  submarine,
  battleship,
  cruiser,
  allShipsSunk
) => {
  let boardArray = [];
  const createBoard = () => {
    for (let i = 1; i < 11; i++) {
      createRow(i);
    }

    function createRow(num) {
      boardArray.push([1, num]);
      boardArray.push([2, num]);
      boardArray.push([3, num]);
      boardArray.push([4, num]);
      boardArray.push([5, num]);
      boardArray.push([6, num]);
      boardArray.push([7, num]);
      boardArray.push([8, num]);
      boardArray.push([9, num]);
      boardArray.push([10, num]);
    }
    obj.boardArr = boardArray;
  };

  const populatedCoordinates = [];
  const missedCoordinates = [];
  const ships = [];

  const generateShips = () => {
    carrier = ship(5, [], "notSunk");
    ships.push(carrier);
    obj.carrier = carrier;

    battleship = ship(4, [], "notSunk");
    ships.push(battleship);
    obj.battleship = battleship;

    cruiser = ship(3, [], "notSunk");
    ships.push(cruiser);
    obj.cruiser = cruiser;

    submarine = ship(3, [], "notSunk");
    ships.push(submarine);
    obj.submarine = submarine;

    destroyer = ship(2, [], "notSunk");
    ships.push(destroyer);
    obj.destroyer = destroyer;

    obj.allShipsSunk = false;
  };

  const recieveAttack = (coordinates) => {
    testIfHitShip(coordinates);
  };

  const giveShipsCoordinates = (
    carrierCoords,
    battleshipCoords,
    cruiserCoords,
    submarineCoords,
    destroyerCoords
  ) => {
    const inputtedCarrierCoords = carrierCoords;
    inputtedCarrierCoords.motherShip = "carrier";
    populatedCoordinates.push(inputtedCarrierCoords);

    const inputtedBattleshipCoords = battleshipCoords;
    inputtedBattleshipCoords.motherShip = "battleship";
    populatedCoordinates.push(inputtedBattleshipCoords);

    const inputtedCruiserCoords = cruiserCoords;
    inputtedCruiserCoords.motherShip = "cruiser";
    populatedCoordinates.push(inputtedCruiserCoords);

    const inputtedSubmarineCoords = submarineCoords;
    inputtedSubmarineCoords.motherShip = "submarine";
    populatedCoordinates.push(inputtedSubmarineCoords);

    const inputtedDestroyerCoords = destroyerCoords;
    inputtedDestroyerCoords.motherShip = "destroyer";
    populatedCoordinates.push(inputtedDestroyerCoords);
  }

  //<---- tests if coordinates are populated with a ship by tapping into the 'Populated Coordinates' Array ---->
  //<-- Identifies whether or not certain coordinates are hit. If not, missed coordinates are stored -->
  const testIfHitShip = (coords) => {
    isHit = false;

    for (let i = 0; i < populatedCoordinates.length; i++) {
      getCoordinates(i, coords);
    }

    function getCoordinates(num, coords) {
      for (let j = 0; j < populatedCoordinates[num].length; j++) {
        if (
          populatedCoordinates[num][j][0] == coords[0] &&
          populatedCoordinates[num][j][1] == coords[1]
        ) {
          let shipName = populatedCoordinates[num].motherShip;
          let hitLocation = j;
          attack(shipName, coords, hitLocation);
        }
      }
    }

    if (isHit === false) {
      attackMissed(coords);
    } else {
      //do nothing
    }
  };

  const attackMissed = (location) => {
    missedCoordinates.push(location);
    markHitSpace(location, 'Miss');
  };

  //carries out attack and marks board location with 'X'
  const attack = (shipName, Coords, hitLocation) => {
    isHit = true;
    markHitSpace(Coords, 'Hit');
    switch (shipName) {
      case "carrier":
        carrier.hit(hitLocation);
        break;
      case "battleship":
        battleship.hit(hitLocation);
        break;
      case "cruiser":
        cruiser.hit(hitLocation);
        break;
      case "submarine":
        submarine.hit(hitLocation);
        break;
      case "destroyer":
        destroyer.hit(hitLocation);
        break;
    }

    for (let j = 0; j < boardArray.length; j++) {
      let coord1 = Coords[0];
      let coord2 = Coords[1];
      if (boardArray[j][0] == coord1 && boardArray[j][1] == coord2) {
        boardArray[j] = "X";
      }
    }
  };

  const checkIfAllShipsSunk = () => {
    for (let i = 0; i < ships.length; i++) {
      if (ships[i].sunkStatus === "Sunk") {
        obj.allShipsSunk = true;
      } else if (ships[i].sunkStatus === "notSunk") {
        obj.allShipsSunk = false;
      };
    };

    if (obj.allShipsSunk == true) {
      console.log('Game Over!!');
    } else if (obj.allShipsSunk == false) {
      //not all ships are sunk
    }
  };


  const markHitSpace = (coords, hitOrMiss) => {
    let coord1 = coords[0];
    let coord2 = coords[1];
    let coordString;
    let chosenCoord;

    switch(hitOrMiss) {
      case('Hit'):
        if(currentPlayer === 'Computer') {
          coordString = `u${coord1},${coord2}`;
          chosenCoord = document.getElementById(coordString);
          chosenCoord.id = 'hitSpace';
          chosenCoord.classList = 'hitSquare';
        } else if (currentPlayer === 'User') {
          coordString = `c${coord1},${coord2}`;
          chosenCoord = document.getElementById(coordString);
          chosenCoord.id = 'hitSpace';
          chosenCoord.classList = 'hitSquare';
        };
        break;
      case('Miss'):
      if(currentPlayer === 'Computer') {
        coordString = `u${coord1},${coord2}`;
        chosenCoord =  document.getElementById(coordString);
        chosenCoord.id = 'missedSpace';
        chosenCoord.classList = 'missedSquare';
      } else if (currentPlayer === 'User') {
        coordString = `c${coord1},${coord2}`;
        chosenCoord =  document.getElementById(coordString);
        chosenCoord.id = 'missedSpace';
        chosenCoord.classList = 'missedSquare';
      };
    };

  };

  const markPopulatedSpaces = () => {
    for (let i = 0; i < populatedCoordinates.length; i++) {
      getCoords(i);
    }

    function getCoords(num) {
      for (let j = 0; j < populatedCoordinates[num].length; j++) {
        let populatedCoord1 = populatedCoordinates[num][j][0];
        let populatedCoord2 = populatedCoordinates[num][j][1];
        let populatedCoords = [populatedCoord1, populatedCoord2];
        markSpaces(populatedCoords);
      }
    }

    function markSpaces(coords) {
      for (let j = 0; j < boardArray.length; j++) {
        let coord1 = coords[0];
        let coord2 = coords[1];
        if (boardArray[j][0] == coord1 && boardArray[j][1] == coord2) {
          obj.boardArray[j].status = "T";
        }
      }
    }
  };

  const obj = {
    boardArray,
    createBoard,
    generateShips,
    recieveAttack,
    populatedCoordinates,
    giveShipsCoordinates,
    missedCoordinates,
    checkIfAllShipsSunk,
    carrier,
    destroyer,
    submarine,
    battleship,
    cruiser,
    allShipsSunk,
    markPopulatedSpaces,
    ships
  };
  return obj;
};

const player = (name, randomCoordinates) => {
  const createPlayer = (name) => {
    obj.name = name;
  };

  let usedCoordinates = [[20,20]];

  //issue is that function below is being called becaucse first case is true;

  let generatedCoordinates;

  const computerMakeMove = () => {
    let coord1 = Math.floor(Math.random() * 10) + 1;
    let coord2 = Math.floor(Math.random() * 10) + 1;

    for (let j = 0; j < usedCoordinates.length; j++) {
      if ((usedCoordinates[j][0] === coord1 && usedCoordinates[j][1] === coord2)) {
        //nothing
      } else {
        let usedCoordinateSet = [coord1, coord2];
        usedCoordinates.push(usedCoordinateSet);
        generatedCoordinates = [];
        makeMove();
        break;
      }
    }

    function makeMove() {
      generatedCoordinates.push(coord1, coord2);
      obj.randomCoordinates = generatedCoordinates;

      if (obj.name === "Computer") {
        userBoard.recieveAttack(generatedCoordinates);

      }
    }
  };

  const obj = {
    name,
    createPlayer,
    computerMakeMove,
    randomCoordinates,
  };
  return obj;
};

function setUpNewGame() {
  userBoard = gameboard();
  userBoard.createBoard();
  userBoard.generateShips();
  user = player("User");

  computerBoard = gameboard();
  computerBoard.createBoard();
  computerBoard.generateShips();
  computerBoard.giveShipsCoordinates(
    [
      [2, 2],
      [3, 2],
      [4, 2],
      [5, 2],
      [6, 2],
    ],
    [
      [1, 4],
      [2, 4],
      [3, 4],
      [4, 4],
    ],
    [
      [6, 5],
      [7, 5],
      [8, 5],
    ],
    [
      [3, 7],
      [4, 7],
      [5, 7],
    ],
    [
      [5, 9],
      [6, 9],
    ]
  );
  computer = player("Computer");
}

function gameLoop() {
  setUpNewGame();
  placeUserShipsDisplay();
}

function placeUserShipsDisplay() {
  displayStartUpBoard(userBoard.boardArray);
  userShipSelect();
}

function getUserSelectedCoordinates(coords) {
  userBoard.giveShipsCoordinates(coords[0], coords[1], coords[2], coords[3], coords[4]);
  userBoard.markPopulatedSpaces();
  computerBoard.markPopulatedSpaces();
  displayMainGame();
};

function displayMainGame() {
  document.getElementById('startUpBoardWrapper').style.display = 'none';
  document.getElementById('rotate').style.display = 'none';
  document.getElementById('shipSelectWrapper').style.display='none';
  document.getElementById('boardsContainer').style.display = 'flex';
  displayBoards(userBoard.boardArray, computerBoard.boardArray);
  activateBoardEventListeners();
}

function loopThroughGame() {
  if (computerBoard.allShipsSunk === true || userBoard.allShipsSunk === true) {
    //end game
  } else {
    //nada
  }
}

function userTurn() {
  if (isHit === true) {
    computerTurn();
    isHit = false;
    computerBoard.checkIfAllShipsSunk();
  } else if (isHit === false) {
    computerTurn();
  };
};

function computerTurn() {
  currentPlayer = 'Computer';
  computer.computerMakeMove();
  if (isHit === true) {
    isHit = false;
    userBoard.checkIfAllShipsSunk();
  } else {
  }
}

function initiateAttack(coordinates) {
  currentPlayer = 'User';
  computerBoard.recieveAttack(coordinates);
  userTurn();
};

export { gameLoop, initiateAttack, gameboard, player, getUserSelectedCoordinates  };
