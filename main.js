
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
      displayImg(){
          let pokeImage = document.getElementById('Img'+ this.page);
          pokeImage.src = this.sprite;

          let pokeImage2 = document.getElementById('Img-2'+ this.page);
          pokeImage2.src = this.sprite;
      }

  displayStats(){
      let name = document.createElement('h3')
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
          Pangoro.displayImg();
      let btn = document.getElementById('btn')
              btn.addEventListener("click",viewStats )
      function viewStats(){
          setTimeout(createPB(0,1,2), 12000)
              Pangoro.displayStats()

      }
  // Pangoro.displayStatsButton();
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
  let Primeape= new Pokemon( name, sprite, hp, attack ,defense, ability,page );
          Primeape.displayImg();
      let btn = document.getElementById('btnPok2')
              btn.addEventListener("click",viewStats )
      function viewStats(){
              Primeape.displayStats()
              createPB(3,4,5)
      }
  });

  axios.get("https://fizal.me/pokeapi/api/v2/name/parasect.json")
  .then(function (answer){
  console.log(answer);
  let name = answer.data.name;
  let sprite = answer.data.sprites.front_default;
  let hp = answer.data.stats[5].base_stat;
  let attack =  answer.data.stats[4].base_stat;
  let defense = answer.data.stats[3].base_stat;
  let ability =answer.data.abilities[0].ability.name
  let page = '3'
  let Entei = new Pokemon( name, sprite, hp, attack ,defense, ability, page);
              Entei.displayImg();
      let btn = document.getElementById('btnPok3')
              btn.addEventListener("click",viewStats )
      function viewStats(){
              Entei.displayStats()
              createPB(6,7,8)
      }
      Mukete = new Trainer()
      Mukete.add(Entei)

  })



// array to maintain progress bars
let pbArr = [
      {
  pid: 'bar1', // parent container id
  incr: 1 // increment value
  }, {
      pid: 'bar2',
      incr: 2
  }, {
      pid: 'bar3',
      incr: 3
  },
      {
  pid: 'bar4', // parent container id
  incr: 4 // increment value
  }, {
      pid: 'bar5',
      incr: 5
  }, {
      pid: 'bar6',
      incr: 3
  }, {
  pid: 'bar7', // parent container id
  incr: 4 // increment value
  }, {
      pid: 'bar8',
      incr: 2
  }, {
      pid: 'bar9',
      incr: 3
  }
]

let loopCnt = 1; // loop count to maintain width
let pb_timeout; // progress bar timeout function

// create progress bar funtion
let createPB = function (p,p2,p3) {

  let is_all_pb_complete = true; // flag to check whether all progress bar are completed executed

  for (var i = 0; i < pbArr.length; i++) {
      var childDiv = document.querySelector('#' + pbArr[i].pid + ' div');
      chil = document.getElementById(pbArr[p].pid)
      chil1 = document.getElementById(pbArr[p2].pid)
      chil2 = document.getElementById(pbArr[p3].pid)
      var newWidth = loopCnt * pbArr[i].incr; // new width

      if (newWidth<= 40) {
          is_all_pb_complete = false;
          chil.style.width = newWidth + '%';
          chil1.style.width = newWidth + '%';
          chil2.style.width = newWidth + '%';

      } else {
          chil.style.width = '100%';
          chil1.style.width = '70%';
          chil2.style.width = '80%';
      }
  }

  if (is_all_pb_complete) { // if true, then clear timeout
      clearTimeout(pb_timeout);
      return;
  }

  loopCnt++; // increment loop count

  // recall function
  pb_timeout = setTimeout(function () {
      createPB(p,p2,p3);
  }, 200);
}


function typeEffect(element, speed) {
  var text = element.innerHTML;
  element.innerHTML = "";

  var i = 0;
  var timer = setInterval(function() {
  if (i < text.length) {
  element.append(text.charAt(i));
  i++;
  } else {
  clearInterval(timer);
          let trainerImage = document.getElementById('imgt')
          trainerImage.src = 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6255/6255159cv11d.jpg'
  }
}, speed);
}


// application
var speed = 95;
var h1 = document.querySelector('h1');
var delay = h1.innerHTML.length * speed + speed;

// type affect to header
typeEffect(h1, speed);
