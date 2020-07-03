const playerInfo = () => {

  window.players = {
    num,
    names,
    kinds,
    roles,
  };

  players.num = prompt("Select number of players: (max 4)");

  // Check if valid entry for number of players
  if (players.num > 4 || players.num < 1) {
    players.num = prompt("Invalid! Select number of players: (max 4)");
  }

  // Players asked for name
  for (let i = 0; i < players.num; i++) {
    players.names[i] = prompt(`Player ${i + 1}, enter your name: `);
  }

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

  // Players asked for kind
  for (let i = 0; i < players.num; i++) {
    console.table(kinds);
    let kind = prompt(`Player ${i + 1}, enter kind: `);

    while (true) {
      switch (kind) {
        case "dog": case "cat": case "monkey": case "bear": case "fox": case "rabbit":  
          players.kinds[i] = kind;
          break;
        default:
          kind = prompt(`Invalid! Player ${i + 1}, enter kind: `);
      }
    }   
  }

}

playerInfo();