
function game() {
    createShips();
}

function createShips() {
    const ship = (shipLength, hitLocations, sunkStatus) => {
        let hits = 0;

        const isSunk = () => {
            console.log('ded')
            sunkStatus = 'Sunk';
        };

        const hit = () => {
            hits++
            console.log(hits);
            if(hits === shipLength) {
                isSunk();
            }
        };

        return {hitLocations, sunkStatus, hit}
    };

    const carrier = ship(5, 0, 'notSunk');
    carrier.hit();
    carrier.hit();
    carrier.hit();
    carrier.hit();
    carrier.hit();

    /*
    const battleship = ship('Battleship', 4);
    const cruiser = ship('Cruiser', 3);
    const submarine = ship('Submarine', 3);
    const destroyer = ship('Destroyer', 2);
    */
};

export {game};
