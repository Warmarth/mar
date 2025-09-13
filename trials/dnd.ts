function rollDice(): number {
  return Math.floor(Math.random() * 6) + 1;
}
function getAbility(): number {
  const ability = Array.from({ length: 4 }, rollDice);
  ability.sort((a, b) => a - b);
  return ability
    .slice(1)
    .reduce((accumulator, value) => accumulator + value, 0);
}

export class DnDCharacter {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  hitpoints: number;

  constructor() {
    this.strength = getAbility();
    this.dexterity = getAbility();
    this.constitution = getAbility();
    this.intelligence = getAbility();
    this.wisdom = getAbility();
    this.charisma = getAbility();

    this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution);
  }
  public static generateAbilityScore(): number {
    const abilities = {
      strength: getAbility(),
      dexterity: getAbility(),
      constitution: getAbility(),
      intelligence: getAbility(),
      wisdom: getAbility(),
      charisma: getAbility(),
    };
    const constitutionModifier = this.getModifierFor(abilities.constitution);
    return 10 + constitutionModifier;
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2);
  }
}

const character = new DnDCharacter;
// use the generated ability score, e.g. log it
console.log(character);
console.log(character.hitpoints);
