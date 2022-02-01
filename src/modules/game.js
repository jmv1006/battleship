const ship = (shipLength, hitLocations, sunkStatus) => {
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
  const obj = { shipLength, hitLocations, sunkStatus, hit };
  return obj;
};

const carrier = ship(5, [], "notSunk");
const battleship = ship(4, [], "notSunk");
const cruiser = ship(3, [], "notSunk");
const submarine = ship(3, [], "notSunk");
const destroyer = ship(2, [], "notSunk");

function testFactory() {
  let testShip = ship(5, [], "notSunk");
  testShip.hit(0);
  testShip.hit(1);
  testShip.hit(2);
  testShip.hit(3);
  testShip.hit(4);
  return testShip.sunkStatus;
}

module.exports = testFactory;
