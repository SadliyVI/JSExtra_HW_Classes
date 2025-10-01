import Swordsman from '../src/classes/Swordsman.js';

describe('Swordsman class', () => {
  test('должен правильно создаваться', () => {
    const hero = new Swordsman('Aragorn');

    expect(hero.name).toBe('Aragorn');
    expect(hero.type).toBe('Swordsman');
    expect(hero.health).toBe(100);
    expect(hero.level).toBe(1);
    expect(hero.attack).toBe(40);
    expect(hero.defence).toBe(10);
  });

  test('проверка что слишком короткое имя выбрасывает ошибку', () => {
    expect(() => new Swordsman('A')).toThrow('Некорректное имя!');
  });

  test('проверка что слишком длинное имя выбрасывает ошибку', () => {
    expect(() => new Swordsman('VeryLongName')).toThrow('Некорректное имя!');
  });
});
