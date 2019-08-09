function SuperHero(character) {
  this.character = character;
}

SuperHero.prototype.whatItDoes = function whatIDo(character) {
  if (this.character === "Hulk") {
    console.log("I SMASH!!!");
  }
}

var hulk = new SuperHero('Hulk');
hulk.whatItDoes();

console.log("\nData Accessor tests >>>>\n----------------------\n")

console.log("'character' in SuperHero", "character" in SuperHero);
console.log("hulk.hasOwnProperty('character')", hulk.hasOwnProperty("character"));
console.log("hulk.hasOwnProperty('character')", hulk.hasOwnProperty("character1"));
