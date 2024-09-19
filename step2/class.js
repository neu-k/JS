class TextDecorator {
  constructor(name) {
    console.log("constructorが呼ばれました");
    this.name = name;
  }

  decorate() {
    console.log(`decorateが呼ばれました: ${this.name}`);
    return `◼︎◼︎◼︎ ${this.name} ◼︎◼︎◼︎`;
  }
}


const td = new TextDecorator("JavaScript");
console.log(td.name);

const str = td.decorate();
console.log(str);
