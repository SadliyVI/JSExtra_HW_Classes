import Character from '../src/classes/Character.js';

describe('Character class', () => {
  test('нельзя создать Character с неверным типом', () => {
    expect(() => new Character('Bad', 'Invalid')).toThrow('Некорректный тип!');
  });
});
