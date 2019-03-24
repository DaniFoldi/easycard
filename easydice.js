/*
  (c) Copyright Dániel Földi 2019

  Version 1.0.0
  GitHub: https://github.com/DaniFoldi/easydice
*/

class EasyCard {
  constructor(cards) {
    this.cards = cards
  }

  

}

if (typeof define === "function" && define.amd) {
  define([], EasyCard)
} else if (typeof module === "object" && module.exports) {
  module.exports = EasyCard
}
