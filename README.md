# Battle Game In JavaScript

The purpose of this project is to practice working with objects and how they interact with one another. Creating a small battle scenario helped me conceptualize what's possible. After taking a couple of Computer Science courses, I wanted to see if I could apply what I learned in C++ toward JavaScript. I found this extremely fun to write and plan on expanding it further.

## Features

I wanted to keep this as simple as possible and not have a player think about math, but will be calculated based on their *kind* (choice of animal) and their *role* (class).

### Kinds

| Kinds  | HIT | SPL | DEX | WIT | DEF | SPD |
| ------ | --- | --- | --- | --- | --- | --- |
| Dog    | +5  | +0  | +1  | +3  | +4  | +2  |
| Monkey | +3  | +2  | +5  | +1  | +0  | +4  |
| Cat    | +0  | +5  | +2  | +4  | +3  | +1  |
| Fox    | +2  | +3  | +4  | +5  | +1  | +0  |
| Bear   | +4  | +1  | +0  | +2  | +5  | +3  |
| Rabbit | +1  | +4  | +3  | +0  | +2  | +5  |

### Roles

| Roles     | HIT | DEX | SPD | DEF | WIT | SPL |
| --------- | --- | --- | --- | --- | --- | --- |
| Inventor  | +0  | +0  | +1  | +0  | +0  | +0  |
| Trickster | +0  | +0  | +0  | +0  | +1  | +0  |
| Mage      | +0  | +0  | +0  | +0  | +0  | +1  |
| Warrior   | +1  | +0  | +0  | +0  | +0  | +0  |
| Guardian  | +0  | +0  | +0  | +1  | +0  | +0  |
| Spy       | +0  | +1  | +0  | +0  | +0  | +0  |

## Attacking

For each object that is constructed, an attack function is given specifying which attack to use (HIT or SPL), and attacking which player by their name (string). There is also dice that is "rolled" for each player to add randomness.

Player A's *HIT* vs Player B's *DEX* **or** Player A's *SPL* vs Player B's *WIT*

If Player A's value is greater, Player B gets another chance to "roll again" + their defense.
If Player B fails, reduce their health by only 1.
If Player A fails, nothing happens.

## Objective

First player to knock the other player's health to 0 wins!

## Ideas for Future Development

- Create a session where you can:
  - Select a number of players with their options.
  - Players take turns attacking one another
- Create an inventory system
  - Weapons, potions, etc.
- Status conditions
  - Poisoned, bleeding, etc.
- Illustrate characters
- Create an interface instead of text-only
