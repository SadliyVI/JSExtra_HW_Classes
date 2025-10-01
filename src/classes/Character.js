export default class Character {
  constructor(name, type) {
    const allowedTypes = [
      'Bowman',
      'Swordsman',
      'Magician',
      'Daemon',
      'Undead',
      'Zombie'
    ];

    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Некорректное имя!');
    }

    if (!allowedTypes.includes(type)) {
      throw new Error('Некорректный тип!');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = 0;
    this.defence = 0;
  }
}
