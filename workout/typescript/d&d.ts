function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}
function getAbility() {
  const ability = Array.from({ length: 4 }, rollDice);
  ability.sort((a, b) => a - b);
  return ability
    .slice(1)
    .reduce((value, accumulator) => accumulator + value, 0);
}

const getModifier = (score: number) => {
  return Math.floor((score - 10) / 2);
};

function getCharacter() {
  const abilities = {
    strength: getAbility(),
    dexterity: getAbility(),
    constitution: getAbility(),
    intelligence: getAbility(),
    wisdom: getAbility(),
    charisma: getAbility(),
  };
  const constitutionModifier = getModifier(abilities.constitution);
  return {
    abilities,
    hitpionts: 10 + constitutionModifier,
  };
}
