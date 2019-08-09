function SuperHero(character, power) {
  this.superPower = power;
  this.character = character;
}

SuperHero.prototype.whatItDoes = function IDo() {
  console.log(`${this.character} ${this.superPower}`);
}

var hulk = new SuperHero('hulk', 'Smash');
hulk.whatItDoes();

console.log('\n------------------\n');
console.log('Prototypes tests\n---------------\n');

console.log('hulk.constructor === SuperHero.prototype.constructor', 
    hulk.constructor === SuperHero.prototype.constructor);

console.log("hulk.hasOwnProperty('constructor')", hulk.hasOwnProperty('constructor'));

console.log('"constructor" in hulk', "constructor" in hulk);