

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
  constructor(name, sprite, hp, attack, defense, ability, page) {
    this.name= name;
    this.sprite= sprite;
    this.hp= hp;
    this.attack= attack;
    this.defense= defense;
    this.ability= ability;
    this.page = page

    this.container = document.querySelector('#pokemonStats'+page);
    this.element = document.createElement("div")
  }
  display(){
    let pokeImage = document.getElementById('Img'+ this.page);
    pokeImage.src = this.sprite;

    let name = document.createElement('h2')
    name.innerHTML = "Name: " + this.name
    this.element.appendChild(name)
    this.container.appendChild(this.element)

    let hp = document.createElement('h3')
    hp.innerHTML = "HP: " + this.hp
    this.element.appendChild(hp)
    this.container.appendChild(this.element)

    let attack = document.createElement('h3')
    attack.innerHTML = "Attack: " + this.attack
    this.element.appendChild(attack)
    this.container.appendChild(this.element)

    let defense = document.createElement('h3')
    defense.innerHTML = "Defense: " + this.defense
    this.element.appendChild(defense);
    this.container.appendChild(this.element)

    let ability = document.createElement('h3')
    ability.innerHTML = "Ability: " + this.ability
    this.element.appendChild(ability)
    this.container.appendChild(this.element)
    console.log(this.ability);
  }
}
axios.get("https://fizal.me/pokeapi/api/v2/name/gengar.json")
  .then(function (answer){
  console.log(answer);
  let page = '1'
  let name = answer.data.name;
  let sprite = answer.data.sprites.front_default;
  let hp = answer.data.stats[5].base_stat;
  let attack =  answer.data.stats[4].base_stat;
  let defense = answer.data.stats[3].base_stat;
  let ability =answer.data.abilities[0].ability.name
  let Pangoro = new Pokemon( name, sprite, hp, attack ,defense, ability,page );
  Pangoro.display();
})

axios.get("https://fizal.me/pokeapi/api/v2/name/primeape.json")
  .then(function (answer){
  console.log(answer);
  let name = answer.data.name;
  console.log(answer.data.name);
  let sprite = answer.data.sprites.front_default;
  let hp = answer.data.stats[5].base_stat;
  let attack =  answer.data.stats[4].base_stat;
  let defense = answer.data.stats[3].base_stat;
  let ability =answer.data.abilities[0].ability.name;
  let page = '2'
  let primeape= new Pokemon( name, sprite, hp, attack ,defense, ability,page );
  primeape.display();
});

axios.get("https://fizal.me/pokeapi/api/v2/name/parasect.json")
  .then(function (answer){
  console.log(answer);
  //let so you can call it later in param
  let name = answer.data.name;
  let sprite = answer.data.sprites.front_default;
  let hp = answer.data.stats[5].base_stat;
  let attack =  answer.data.stats[4].base_stat;
  let defense = answer.data.stats[3].base_stat;
  let ability =answer.data.abilities[0].ability.name
  let page = '3'
  let Entei = new Pokemon( name, sprite, hp, attack ,defense, ability, page);
   Entei.display();
})
let Mukete = new Trainer()


// array to maintain progress bars
var pbArr = [{
    pid: 'bar1', // parent container id
    incr: 5 // increment value
  }, {
      pid: 'bar2',
      incr: 2
  }, {
      pid: 'bar3',
      incr: 3
  }, {
      pid: 'bar4',
      incr: 4
  }, {
      pid: 'bar5',
      incr: 5
  }, {
    pid: 'bar6',
    incr: 5
  }, {
    pid: 'bar7',
    incr: 5
  }, {
    pid: 'bar8',
    incr: 5
  }, {
    pid: 'bar9',
    incr: 5
  }
]

var loopCnt = 1; // loop count to maintain width
var pb_timeout; // progress bar timeout function

// create progress bar funtion
var createPB = function () {
	var is_all_pb_complete = true; // flag to check whether all progress bar are completed executed
  for (var i = 0; i < pbArr.length; i++) {
      var childDiv = document.querySelector('#' + pbArr[i].pid + ' div');
      chil = document.getElementById(pbArr[0].pid)
      chil1 = document.getElementById(pbArr[1].pid)
      chil2 = document.getElementById(pbArr[2].pid)
      chil3 = document.getElementById(pbArr[3].pid)
      chil4 = document.getElementById(pbArr[4].pid)
      chil5 = document.getElementById(pbArr[5].pid)
      chil6 = document.getElementById(pbArr[6].pid)
      chil7 = document.getElementById(pbArr[7].pid)
      chil8 = document.getElementById(pbArr[8].pid)
      // child div
      var newWidth = loopCnt * pbArr[i].incr; // new width

      if (newWidth<= 40) {
          is_all_pb_complete = false;
          chil.style.width = newWidth + '%';
          chil1.style.width = newWidth + '%';
          chil2.style.width = newWidth + '%';
          chil3.style.width = newWidth + '%';
          chil4.style.width = newWidth + '%';
          chil5.style.width = newWidth + '%';
          chil6.style.width = newWidth + '%';
          chil7.style.width = newWidth + '%';
          chil8.style.width = newWidth + '%';
      } else {
          chil.style.width = '100%';
          chil1.style.width = '70%';
          chil2.style.width = '80%';
          chil3.style.width = '85%';
          chil4.style.width = '100%';
          chil5.style.width = '70%';
          chil6.style.width = '80%';
          chil7.style.width = '85%';
          chil8.style.width = '100%';
      }
  }

  if (is_all_pb_complete) { // if true, then clear timeout
      clearTimeout(pb_timeout);
      return;
  }
  loopCnt++
  // recall function
  pb_timeout = setTimeout(function () {
      createPB();
  }, 200);
}

// call function to initiate progress bars
var btn = document.getElementById('btn')
console.log(btn);
btn.addEventListener("click",viewStats )
function viewStats(){
  createPB()
}
