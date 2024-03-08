class SomadorDeNotas {
    constructor(){
        this.total = 0;
    }

    adicionarNota(nota){
        this.total += nota;
    }

    verTotal(){
        console.log(`O soma total das notas é: ${this.total}`);
    }
}

const somador = new SomadorDeNotas();

somador.adicionarNota(7);
somador.adicionarNota(8);

somador.verTotal();