const playerInfo = () => {

  let names = kinds = roles = [];

  const num = prompt("Select number of players: (max 4)");

  // Check if valid entry for number of players
  if (num > 4 || num < 1) {
    num = prompt("Invalid! Select number of players: (max 4)");
  }

  // Players asked for name
  for (let i = 0; i < num; i++) {
    
    names.push(prompt(`Player ${i + 1}, enter your name: `));
  }

  const roleSelect = {
    inventor: [0, 0, -1, 0, 2, 0],
    trickster: [0, 0, 2, 0, -1, 0],
    mage: [-1, 0, 0, 0, 0, 2],
    warrior: [2, 0, 0, 0, 0, -1],
    guardian: [0, 1, 0, 2, 0, 0],
    spy: [0, 2, 0, -1, 0, 0]
  }

  const kindSelect = {
    dog: [5, 3, 3, 1, -3, -5],
    monkey: [-5, -3, -3, -1, 3, 5],
    bear: [3, 1, 1, 5, -1, -3],
    fox: [-3, -1, -1, -5, 1, 3],
    cat: [1, -5, -5, 3, 5, -1],
    rabbit: [-1, 5, 5, -3, -5, 1]
  }

  let kindOptions = ["dog","cat","monkey","bear","fox","rabbit"];

  // Players asked for kind
  for (let i = 0; i < num; i++) {
    console.table(kindSelect);
    let kind, valid = false;
    while (!valid) {
      kind = prompt(`${names[i]}, enter kind: `);

      for (let i = 0; i < kindOptions.length; i++) {
        if (/dog|cat|monkey|bear|fox|rabbit/i.test(kind) ) {
          kinds.push(kind);
  
        }
      }

    }
  }

}

playerInfo();
