
const ship = (shipLength, hitLocations, sunkStatus, coordinates) => {

  for (let i = 0; i < shipLength; i++) {
    hitLocations.push(i);
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
  }
  const obj = { shipLength, hitLocations, sunkStatus, hit, assignCoordinates, coordinates };
  return obj;
};



const gameboard = (boardArr) => {

  const createBoard = () => {
    let boardArray = [];
    for(let i = 1; i < 11; i++) {
      createRow(i);
    }

    function createRow(num) {
      boardArray.push([1, num])
      boardArray.push([2, num])
      boardArray.push([3, num])
      boardArray.push([4, num])
      boardArray.push([5, num])
      boardArray.push([6, num])
      boardArray.push([7, num])
      boardArray.push([8, num])
      boardArray.push([9, num])
      boardArray.push([10, num])
    }
    obj.boardArr = boardArray;
  };
  const carrier = ship(5, [], "notSunk");
  const carrierCoords = [[1,1],[2,1],[3,1],[4,1],[5,1]];

  carrier.assignCoordinates(carrierCoords);

  /*
  const battleship = ship(4, [], "notSunk");
  const cruiser = ship(3, [], "notSunk");
  const submarine = ship(3, [], "notSunk");
  const destroyer = ship(2, [], "notSunk");
  */

  const recieveAttack = (coordinates) => {
    //do stuff
  }
  const obj = { boardArr, createBoard };
  return obj;
};

function testBoardCoordinates() {
  const board = gameboard();
  board.createBoard();
  return board.boardArr;
}

module.exports = testBoardCoordinates;

