// criando a classe "Funcionario"
class Funcionario {
    // adicionando à classe "Funcionario" os atributos: nome, idade e salarioBase
    constructor(nome, idade, salarioBase){
        // criando os atributos da classe 
        this.nome = nome;
        this.idade = idade;
        this.salarioBase = salarioBase;
    }

    // declarando o retorno do método "calcularSalario" da classe como o salário base
    calcularSalario(){
        return this.salarioBase
    }
}

// criando a classe "Professor" que herda os atributos da classe "Funcionario"
class Professor extends Funcionario {
    // declarando quais atributos deverão ser declarados 
    constructor(nome, idade, salarioBase, diciplina, horasAula, valorHoraAula){
        super(nome, idade, salarioBase); //herdando os atributos da classe "Funcionario"
        // crinado atributos da classe 
        this.diciplina = diciplina; // diciplina com que o professor trabalha
        this.horasAula = horasAula; // horas de aula por semana 
        this.valorHoraAula = valorHoraAula // valor da hora/aula
    }

    // declarando o retorno do método "calcularSalario" da classe como a multiplicação da horas de aula pelo seu valor somada ao salário base 
    calcularSalario(){
        return (this.horasAula * this.valorHoraAula) + this.salarioBase;
    }
}

// criando dois objetos da classe "Professor" e definindo o valor de seus atrbutos
const professor1 = new Professor("Artur", 36, 2400, "biologia", 10, 30);
const professor2 = new Professor("Paula", 41, 3000, "artes", 12, 50);

// declarando no console a pessoa, a área de atuação e o salário
console.log(`${professor1.nome} dá aula de ${professor1.diciplina} e recebe ${professor1.calcularSalario()}.`);
console.log(`${professor2.nome} dá aula de ${professor2.diciplina} e recebe ${professor2.calcularSalario()}.`);