// MyClassJasmineStart.js
class House {
  constructor(name, address, cost) {
    this.name = name;
    this.address = address;
    this.cost = cost;
  }
}

class Pet {
  constructor(name, age, species) {
    this.name = name;
    this.age = age;
    this.species = species;
  }
}

class Children {
  constructor(name, age, favoritePCGame) {
    this.name = name;
    this.age = age;
    this.favoritePCGame = favoritePCGame;
  }
}

class MyClassJasmineStart {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.houses = [];
    this.pets = [];
    this.children = [];
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  isAdult() {
    return this.age >= 18;
  }

  getHouses() {
    return this.houses;
  }

  getPets() {
    return this.pets;
  }

  getChildren() {
    return this.children;
  }

  addHouse(name, address, cost) {
    const house = new House(name, address, cost);
    this.houses.push(house);
  }

  editHouse(index, name, address, cost) {
    if (index >= 0 && index < this.houses.length) {
      this.houses[index] = new House(name, address, cost);
    }
  }

  deleteHouse(index) {
    if (index >= 0 && index < this.houses.length) {
      this.houses.splice(index, 1);
    }
  }

  addPet(name, age, species) {
    const pet = new Pet(name, age, species);
    this.pets.push(pet);
  }

  editPet(index, name, age, species) {
    if (index >= 0 && index < this.pets.length) {
      this.pets[index] = new Pet(name, age, species);
    }
  }

  deletePet(index) {
    if (index >= 0 && index < this.pets.length) {
      this.pets.splice(index, 1);
    }
  }

  addChild(name, age, favoritePCGame) {
    const child = new Children(name, age, favoritePCGame);
    this.children.push(child);
  }

  editChild(index, name, age, favoritePCGame) {
    if (index >= 0 && index < this.children.length) {
      this.children[index] = new Children(name, age, favoritePCGame);
    }
  }

  deleteChild(index) {
    if (index >= 0 && index < this.children.length) {
      this.children.splice(index, 1);
    }
  }
}

module.exports = MyClassJasmineStart;
