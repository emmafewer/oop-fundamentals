// Concatenative Inheritance

// Concatenative inheritance is a type of prototypal inheritance.
// It is the process of copying the properties from one object to another, without retaining a reference between the two objects. 
// To put it in a metaphor, where class inheritance is like a corporate retail store, each store is a derivative of the main chain (one main label with a few local labels),
// concatenative inheritance is like a knock-off store. It is not part of corporate retail chain, but they copied very similar aspects to it.

// With class inheritance, there is a base-class with sub-classes. The sub-classes inherit from the base-class and are therefore connected to it (sub-classes delegate to base-class).
// With concatenative inheritance, there are no classes. Only objects that can be assigned (copied) to and from one another. 

// This is an example of class inheritance
class Animal {
    constructor(name, energy) {
      this.name = name
      this.energy = energy
    }
    eat(amount) {
      console.log(`${this.name} is eating.`)
      this.energy += amount
    }
    sleep() {
      console.log(`${this.name} is sleeping.`)
      this.energy += length
    }
    play() {
      console.log(`${this.name} is playing.`)
      this.energy -= length
    }
}
  
class Dog extends Animal {
    constructor(name, energy, breed) {
      super(name, energy)
  
      this.breed = breed
    }
    bark() {
      console.log('Woof Woof!')
      this.energy -= .1
    }
}

const cooper = new Dog('Cooper', 9, 'Aussie')
cooper.sleep(1) // Cooper is sleeping.
cooper.bark() // Woof Woof!
cooper.__proto__ // Animal {constructor: ƒ, bark: ƒ}


// This is an example of concatenative inheritance

  const sleeper = (state) => ({
    sleep(length) {
      console.log(`${state.name} is sleeping.`)
      state.energy += length
    }
  })
  
  const player = (state) => ({
    play() {
      console.log(`${state.name} is playing.`)
      state.energy -= length
    }
  })
  
  const barker = (state) => ({
    bark() {
      console.log('Woof Woof!')
      state.energy -= .1
    }
  })

  function DogConcatenative (name, energy, breed) {
    let dog = {
      name,
      energy,
      breed,
    }
  
    return Object.assign(
      dog,
      sleeper(dog),
      player(dog),
      barker(dog),
    )
  }
  
  const leo = DogConcatenative('Leo', 10, 'Goldendoodle')
  leo.sleep(10) // Leo is sleeping.
  leo.bark() // Woof Woof!
  leo.__proto__ // {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}


  
