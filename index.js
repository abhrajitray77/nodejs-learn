const SuperHero = require('./super-hero')

const jitman = new SuperHero("Jitman");
console.log(jitman.getName());
jitman.setName("Ray abhra");
console.log(jitman.getName());

const superman = new SuperHero("Superman");
console.log(superman.getName());
