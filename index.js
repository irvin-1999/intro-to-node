// jshint esversion:6

const superheroes = require('superheroes');
const supervillian = require('supervillains')

let mySuperHeroName = superheroes.random()
let mySuperVillianName = supervillian.random()

console.log('super-Hero', mySuperHeroName)
console.log('super-villian', mySuperVillianName)