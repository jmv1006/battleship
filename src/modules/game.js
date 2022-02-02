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
//<----- Gameboard factory ----->
const gameboard = (allShipsSunk) => {
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
    const carrierCoords = [
      [1, 1],
      [2, 1],
      [3, 1],
      [4, 1],
      [5, 1],
    ];
    carrierCoords.motherShip = "carrier";
    populatedCoordinates.push(carrierCoords);
    ships.push(carrier);

    battleship = ship(4, [], "notSunk");
    const battleshipCoords = [
      [5, 2],
      [6, 2],
      [7, 2],
      [8, 2],
    ];
    battleshipCoords.motherShip = "battleship";
    populatedCoordinates.push(battleshipCoords);
    ships.push(battleship);

    cruiser = ship(3, [], "notSunk");
    const cruiserCoords = [
      [1, 3],
      [2, 3],
      [3, 3],
    ];
    cruiserCoords.motherShip = "cruiser";
    populatedCoordinates.push(cruiserCoords);
    ships.push(cruiser);

    submarine = ship(3, [], "notSunk");
    const submarineCoords = [
      [4, 3],
      [5, 3],
      [6, 3],
    ];
    submarineCoords.motherShip = "submarine";
    populatedCoordinates.push(submarineCoords);
    ships.push(submarine);

    destroyer = ship(2, [], "notSunk");
    const destroyerCoords = [
      [3, 5],
      [4, 5],
    ];
    destroyerCoords.motherShip = "destroyer";
    populatedCoordinates.push(destroyerCoords);
    ships.push(destroyer);

    allShipsSunk = false;
  };

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
        };
      };
    };
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

  const checkIfAllShipsSunk = () => {
    for (let i = 0; i < ships.length; i++) {
      if (ships[i].sunkStatus === "Sunk") {
        obj.allShipsSunk = true;
      } else if (ships[i].sunkStatus === "notSunk") {
        obj.allShipsSunk = false;
      }
    }

    if (allShipsSunk === true) {
      //all ships are sunk
    } else if (allShipsSunk === false) {
      //not all ships are sunk
    }
  };

  const obj = {
    boardArray,
    createBoard,
    generateShips,
    recieveAttack,
    missedCoordinates,
    checkIfAllShipsSunk,
    allShipsSunk,
  };
  return obj;
};

const player = () => {
  //player factory
};

function testBoardCoordinates() {
  const board = gameboard();
  board.createBoard();
  board.generateShips();
  destroyer.sinkShip();
  carrier.sinkShip();
  submarine.sinkShip();
  battleship.sinkShip();
  cruiser.sinkShip();
  board.checkIfAllShipsSunk();
  return board.allShipsSunk;
}

module.exports = testBoardCoordinates;
