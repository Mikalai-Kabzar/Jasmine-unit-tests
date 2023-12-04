// MyClassJasmineStart.spec.js
const MyClassJasmineStart = require('./MyClassJasmineStart');

describe('MyClassJasmineStart', () => {
  let myClassInstance;

  beforeEach(() => {
    // Initialize a new instance before each test
    myClassInstance = new MyClassJasmineStart('John', 'Doe', 30);
  });

  it('should create an instance of MyClassJasmineStart', () => {
    expect(JSON.stringify(myClassInstance)).toEqual(JSON.stringify({
      firstName: 'John',
      lastName: 'Doe',
      age: 30,
      houses: [],
      pets: [],
      children: [],
    }));
  });

  it('should get the full name', () => {
    expect(myClassInstance.getFullName()).toEqual('John Doe');
  });

  it('should check if the user is an adult', () => {
    expect(myClassInstance.isAdult()).toBe(true);
  });

  it('should add and get houses', () => {
    myClassInstance.addHouse('Home', '123 Main St', 500000);
    myClassInstance.addHouse('Office', '456 Business Ave', 1000000);

    const houses = myClassInstance.getHouses();
    expect(JSON.stringify(houses)).toEqual(JSON.stringify([
      { name: 'Home', address: '123 Main St', cost: 500000 },
      { name: 'Office', address: '456 Business Ave', cost: 1000000 },
    ]));
  });

  it('should edit a house', () => {
    myClassInstance.addHouse('Home', '123 Main St', 500000);
    myClassInstance.editHouse(0, 'New Home', '456 Side St', 600000);

    const houses = myClassInstance.getHouses();
    expect(JSON.stringify(houses)).toEqual(JSON.stringify([
      { name: 'New Home', address: '456 Side St', cost: 600000 },
    ]));
  });

  it('should delete a house', () => {
    myClassInstance.addHouse('Home', '123 Main St', 500000);
    myClassInstance.addHouse('Office', '456 Business Ave', 1000000);
    myClassInstance.deleteHouse(0);

    const houses = myClassInstance.getHouses();
    expect(JSON.stringify(houses)).toEqual(JSON.stringify([
      { name: 'Office', address: '456 Business Ave', cost: 1000000 },
    ]));
  });

  it('should add and get pets', () => {
    myClassInstance.addPet('Fluffy', 3, 'Dog');
    myClassInstance.addPet('Whiskers', 2, 'Cat');

    const pets = myClassInstance.getPets();
    expect(JSON.stringify(pets)).toEqual(JSON.stringify([
      { name: 'Fluffy', age: 3, species: 'Dog' },
      { name: 'Whiskers', age: 2, species: 'Cat' },
    ]));
  });

  it('should edit a pet', () => {
    myClassInstance.addPet('Fluffy', 3, 'Dog');
    myClassInstance.editPet(0, 'New Fluffy', 4, 'Golden Retriever');

    const pets = myClassInstance.getPets();
    expect(JSON.stringify(pets)).toEqual(JSON.stringify([
      { name: 'New Fluffy', age: 4, species: 'Golden Retriever' },
    ]));
  });

  it('should delete a pet', () => {
    myClassInstance.addPet('Fluffy', 3, 'Dog');
    myClassInstance.addPet('Whiskers', 2, 'Cat');
    myClassInstance.deletePet(0);

    const pets = myClassInstance.getPets();
    expect(JSON.stringify(pets)).toEqual(JSON.stringify([
      { name: 'Whiskers', age: 2, species: 'Cat' },
    ]));
  });

  it('should add and get children', () => {
    myClassInstance.addChild('Alice', 8, 'Minecraft');
    myClassInstance.addChild('Bob', 5, 'Roblox');

    const children = myClassInstance.getChildren();
    expect(JSON.stringify(children)).toEqual(JSON.stringify([
      { name: 'Alice', age: 8, favoritePCGame: 'Minecraft' },
      { name: 'Bob', age: 5, favoritePCGame: 'Roblox' },
    ]));
  });

  it('should edit a child', () => {
    myClassInstance.addChild('Alice', 8, 'Minecraft');
    myClassInstance.editChild(0, 'New Alice', 9, 'Fortnite');

    const children = myClassInstance.getChildren();
    expect(JSON.stringify(children)).toEqual(JSON.stringify([
      { name: 'New Alice', age: 9, favoritePCGame: 'Fortnite' },
    ]));
  });

  it('should delete a child', () => {
    myClassInstance.addChild('Alice', 8, 'Minecraft');
    myClassInstance.addChild('Bob', 5, 'Roblox');
    myClassInstance.deleteChild(0);

    const children = myClassInstance.getChildren();
    expect(JSON.stringify(children)).toEqual(JSON.stringify([
      { name: 'Bob', age: 5, favoritePCGame: 'Roblox' },
    ]));
  });

  // Add more tests as needed...
});
