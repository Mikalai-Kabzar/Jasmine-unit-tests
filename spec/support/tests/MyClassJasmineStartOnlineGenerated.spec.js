const MyClassJasmineStart = require('./MyClassJasmineStart');

describe('MyClassJasmineStart', function () {
  let myClassInstance;

  beforeEach(function () {
    myClassInstance = new MyClassJasmineStart('John', 'Doe', 25);
  });

  it('should return full name', function () {
    expect(myClassInstance.getFullName()).toEqual('John Doe');
  });

  it('should return true for adult check', function () {
    expect(myClassInstance.isAdult()).toBe(true);
  });

  it('should return false for adult check when under 18', function () {
    let minorClassInstance = new MyClassJasmineStart('Julie', 'Smith', 17);
    expect(minorClassInstance.isAdult()).toBe(false);
  });

  it('should be able to add a house', function () {
    myClassInstance.addHouse('Lovely Home', '123 Street', 100000);
    expect(myClassInstance.getHouses().length).toEqual(1);
    expect(myClassInstance.getHouses()[0].name).toBe('Lovely Home');
  });

  it('should be able to edit a house', function () {
    myClassInstance.addHouse('Old Home', '124 Street', 90000);
    myClassInstance.editHouse(0, 'Renovated Home', '124 Street', 110000);
    expect(myClassInstance.getHouses()[0].name).toBe('Renovated Home');
    expect(myClassInstance.getHouses()[0].cost).toEqual(110000);
  });

  it('should not edit a house with an invalid index', function () {
    myClassInstance.editHouse(99, 'Non-existent', 'No street', 0);
    expect(myClassInstance.getHouses().length).toEqual(0);
  });

  it('should be able to delete a house', function () {
    myClassInstance.addHouse('To be deleted', '125 Street', 80000);
    expect(myClassInstance.getHouses().length).toEqual(1);
    myClassInstance.deleteHouse(0);
    expect(myClassInstance.getHouses().length).toEqual(0);
  });

  it('should not delete a house with an invalid index', function () {
    myClassInstance.deleteHouse(99);
    expect(myClassInstance.getHouses().length).toEqual(0);
  });

  it('should be able to add a pet', function () {
    myClassInstance.addPet('Fluffy', 3, 'Dog');
    expect(myClassInstance.getPets().length).toEqual(1);
    expect(myClassInstance.getPets()[0].species).toEqual('Dog');
  });

  it('should be able to edit a pet', function () {
    myClassInstance.addPet('Scratchy', 3, 'Cat');
    myClassInstance.editPet(0, 'Furry', 4, 'Dog');
    expect(myClassInstance.getPets()[0].name).toEqual('Furry');
    expect(myClassInstance.getPets()[0].species).toEqual('Dog');
  });

  it('should not edit a pet with an invalid index', function () {
    myClassInstance.editPet(99, 'Ghost', 99, 'Ghost');
    expect(myClassInstance.getPets().length).toEqual(0);
  });

  it('should be able to delete a pet', function () {
    myClassInstance.addPet('Gone', 5, 'Bird');
    expect(myClassInstance.getPets().length).toEqual(1);
    myClassInstance.deletePet(0);
    expect(myClassInstance.getPets().length).toEqual(0);
  });

  it('should not delete a pet with an invalid index', function () {
    myClassInstance.deletePet(99);
    expect(myClassInstance.getPets().length).toEqual(0);
  });

  it('should be able to add a child', function () {
    myClassInstance.addChild('Kid', 10, 'Minecraft');
    expect(myClassInstance.getChildren().length).toEqual(1);
    expect(myClassInstance.getChildren()[0].favoritePCGame).toEqual('Minecraft');
  });

  it('should be able to edit a child', function () {
    myClassInstance.addChild('Youngster', 8, 'Roblox');
    myClassInstance.editChild(0, 'Pro Gamer', 9, 'Fortnite');
    expect(myClassInstance.getChildren()[0].name).toEqual('Pro Gamer');
    expect(myClassInstance.getChildren()[0].favoritePCGame).toEqual('Fortnite');
  });

  it('should not edit a child with an invalid index', function () {
    myClassInstance.editChild(99, 'Non-existent', 0, 'N/A');
    expect(myClassInstance.getChildren().length).toEqual(0);
  });

  it('should be able to delete a child', function () {
    myClassInstance.addChild('Gone', 7, 'Tetris');
    expect(myClassInstance.getChildren().length).toEqual(1);
    myClassInstance.deleteChild(0);
    expect(myClassInstance.getChildren().length).toEqual(0);
  });

  it('should not delete a child with an invalid index', function () {
    myClassInstance.deleteChild(99);
    expect(myClassInstance.getChildren().length).toEqual(0);
  });
});
