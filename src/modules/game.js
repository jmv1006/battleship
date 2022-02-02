


const ship = (shipLength, hitLocations, sunkStatus, coordinates) => {
  for (let i = 0; i < shipLength; i++) {
    hitLocations.push(i);
  }

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
  };
  return obj;
};






let carrier;
let battleship;
let cruiser;
let submarine;
let destroyer;
//<----- Gameboard factory ----->
const gameboard = () => {
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

  carrier = ship(5, [], "notSunk");
  const carrierCoords = [
    [1, 1],
    [2, 1],
    [3, 1],
    [4, 1],
    [5, 1],
  ];
  carrierCoords.motherShip = "carrier";
  populatedCoordinates.push(carrierCoords);

  battleship = ship(4, [], "notSunk");
  const battleshipCoords = [
    [5, 2],
    [6, 2],
    [7, 2],
    [8, 2],
  ];
  battleshipCoords.motherShip = "battleship";
  populatedCoordinates.push(battleshipCoords);

  cruiser = ship(3, [], "notSunk");
  const cruiserCoords = [
    [1, 3],
    [2, 3],
    [3, 3],
  ];
  cruiserCoords.motherShip = "cruiser";
  populatedCoordinates.push(cruiserCoords);

  submarine = ship(3, [], "notSunk");
  const submarineCoords = [
    [4, 3],
    [5, 3],
    [6, 3],
  ];
  submarineCoords.motherShip = "submarine";
  populatedCoordinates.push(submarineCoords);

  destroyer = ship(2, [], "notSunk");
  const destroyerCoords = [
    [3, 5],
    [4, 5],
    [5, 5],
  ];
  destroyerCoords.motherShip = "destroyer";
  populatedCoordinates.push(destroyerCoords);

  const recieveAttack = (coordinates) => {
    testIfHitShip(coordinates);
  };

  //<---- tests if coordinates are populated with a ship by tapping into the 'Populated Coordinates' Array ---->
  let isHit; //<-- Identifies whether or not certain coordinates are hit. If not, missed coordinates are stored -->
  const testIfHitShip = (coords) => {
    isHit = false;

    for (let i = 0; i < populatedCoordinates.length; i++) {
      getCoordinates(i, coords);
    }

    if (isHit === false) {
      attackMissed(coords);
    } else {
      //do nothing
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
          isHit = true;
        }
      }
    }
  };

  const attackMissed = (location) => {
    missedCoordinates.push(location);
  };

  //carries out attack and marks board location with 'X'
  const attack = (shipName, Coords, hitLocation) => {
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

  const obj = { boardArray, createBoard, recieveAttack, missedCoordinates };
  return obj;
};

function testBoardCoordinates() {
  const board = gameboard();
  board.createBoard();
  board.recieveAttack([5, 3]);
  return board.boardArr;
}

module.exports = testBoardCoordinates;
