const testFactory = require('../modules/game.js')


test('hit stuff', () => {
    expect(testFactory()).toBe('Sunk');
});



