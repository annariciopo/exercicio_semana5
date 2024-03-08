class Animal {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    descrever() {
        return `Esse é o ${this.nome}, ele tem ${this.idade} anos.`;
    }
}

const animal1 = new Animal("gato", 5)
const animal2 = new Animal("cachorro", 12)

console.log(animal1.descrever() + " " + animal2.descrever())