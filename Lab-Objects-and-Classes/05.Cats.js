class Cat {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  meow() {
    console.log(`${this.name}, age ${this.age} says Meow`);
  }
}

function createCats(catArray) {
  for (let i = 0; i < catArray.length; i++) {
    const [name, age] = catArray[i].split(" ");
    const cat = new Cat(name, age);
    cat.meow();
  }
}

const cats1 = ["Mellow 2", "Tom 5"];
createCats(cats1);
