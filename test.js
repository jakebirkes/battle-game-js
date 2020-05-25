class Player {
  constructor(name, role, kind) {
    this.name = name; // player's name
    this.role = role; // inventor, trickster, mage, warrior, guardian, spy
    this.kind = kind; // dog, monkey, bear, fox, cat, rabbit
    this.health = 10; // starting health
    this.ATK = function ATK(cmd, name) { // attack player with this name
      const ATK = cmd === 'HIT' ? this.HIT : this.SPL;
      const player = Players.filter(plr => plr.name == name)[0];
      const BLK = cmd === 'HIT' ? player.DEX : player.WIT;

      const plrA_Roll = ATK + rollDice();
      const plrB_Roll = BLK + rollDice();
      const plrB_DEF = player.DEF + rollDice();

      if (plrA_Roll - plrB_Roll > 0) {
        (plrA_Roll - plrB_DEF > 0) ? Players.filter(plr => plr.name == name)[0].health -= 1: 0;
      }
    }
  }
  get HIT() {
    return stats('HIT', this.role, this.kind);
  }
  get DEX() {
    return stats('DEX', this.role, this.kind);
  }
  get SPD() {
    return stats('SPD', this.role, this.kind);
  }
  get DEF() {
    return stats('DEF', this.role, this.kind);
  }
  get WIT() {
    return stats('WIT', this.role, this.kind);
  }
  get SPL() {
    return stats('SPL', this.role, this.kind);
  }
  set HP(num) {
    typeof num === 'number' ? this.health += num : this.health += 1;
  }
}

// [HIT, DEX, SPD, DEF, WIT, SPL] ~ balanced (paper, rock, scissors)
function stats(stat, role, kind) {

  const roles = {
    inventor: [0, 0, -1, 0, 2, 0],
    trickster: [0, 0, 2, 0, -1, 0],
    mage: [-1, 0, 0, 0, 0, 2],
    warrior: [2, 0, 0, 0, 0, -1],
    guardian: [0, 1, 0, 2, 0, 0],
    spy: [0, 2, 0, -1, 0, 0]
  }

  const kinds = {
    dog: [5, 3, 3, 1, -3, -5],
    monkey: [-5, -3, -3, -1, 3, 5],
    bear: [3, 1, 1, 5, -1, -3],
    fox: [-3, -1, -1, -5, 1, 3],
    cat: [1, -5, -5, 3, 5, -1],
    rabbit: [-1, 5, 5, -3, -5, 1]
  }

  switch (stat) {
    case 'HIT':
      return roles[role][0] + kinds[kind][0];
    case 'DEX':
      return roles[role][1] + kinds[kind][1];
    case 'SPD':
      return roles[role][2] + kinds[kind][2];
    case 'DEF':
      return roles[role][3] + kinds[kind][3];
    case 'WIT':
      return roles[role][4] + kinds[kind][4];
    case 'SPL':
      return roles[role][5] + kinds[kind][5];
  }

}

// 1d6
function rollDice() {
  return 1 + Math.floor(Math.random() * 6);
}

const Players = [];

Players.push(new Player('Spike', 'trickster', 'dog'));
Players.push(new Player('Abu', 'spy', 'monkey'));

Players[0].ATK('HIT', "Abu");

console.log(Players[1].health);