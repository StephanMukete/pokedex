// Trainer class containing pokemons
class Trainer{
  constructor(){
    this.pokemon=[];
  }
  all(){
    return this.pokemon;
  }
  add(pokemons){
    this.pokemon.push(pokemons);
  }
  get(name){
    for(let i=0; i<this.pokemon.length; i++){
      if (name === this.pokemon[i].name){
        return this.pokemon[i];
      }
    }
  }
}

// Pokemon class with the main properties
class Pokemon {
  constructor(name, sprite, hp, attack, defense, abilities) {
    this.name= name;
    this.sprite= sprite;
    this.hp= hp;
    this.attack= attack;
    this.defense= defense;
    this.abilities= abilities;
  }
  display(){

  }
}

let Mukete = new Trainer()
