class Animal {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    descrever() {
        return `Esse é o ${this.nome}, ele tem ${this.idade} anos.`;
    }
}

class Gato extends Animal {
    constructor(nome, idade, cor){
        super(nome, idade);
        this.cor = cor;
    }

    miar() {
        return `miau miau`
    }
}

const animal1 = new Animal("cachorro", 12);
const animal2 = new Gato("gato", 5, "preto");

console.log(animal1.descrever() + "\n" + animal2.descrever() + " " + animal2.miar());
