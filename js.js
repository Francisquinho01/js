
class BodyBuilder {
    constructor(nome, altura, massa, peso, tamanhoBraço, tamanhoPerna) {
        if (this.constructor === BodyBuilder) {
            throw new Error("Não é possível instanciar a classe BodyBuilder diretamente.");
        }
        this.nome = nome;
        this.altura = altura;
        this.massa = massa;
        this.peso = peso;
        this.tamanhoBraço = tamanhoBraço;
        this.tamanhoPerna = tamanhoPerna;
    }

   
    calcularPesoIdeal() {
        throw new Error("Método 'calcularPesoIdeal()' deve ser implementado.");
    }

    
    mostrarInformacoes() {
        return `Nome: ${this.nome}\nAltura: ${this.altura} cm\nMassa: ${this.massa} kg\nPeso: ${this.peso} kg\nTamanho do Braço: ${this.tamanhoBraço} cm\nTamanho da Perna: ${this.tamanhoPerna} cm`;
    }
}


class Atleta extends BodyBuilder {
    constructor(nome, altura, massa, peso, tamanhoBraço, tamanhoPerna) {
        super(nome, altura, massa, peso, tamanhoBraço, tamanhoPerna);
    }

  
    calcularPesoIdeal() {
        
        return (this.altura - 100) + (this.massa / 2);
    }
}

class Competidor extends BodyBuilder {
    constructor(nome, altura, massa, peso, tamanhoBraço, tamanhoPerna) {
        super(nome, altura, massa, peso, tamanhoBraço, tamanhoPerna);
    }

   
    calcularPesoIdeal() {
       
        return (this.altura - 100) + (this.massa / 3);
    }
}


const atleta = new Atleta("Carlos", 180, 80, 82, 40, 60);
const competidor = new Competidor("Ana", 170, 70, 72, 38, 58);
const Amador = new Atleta("Patricio", 180, 60, 42, 28, 50);


console.log(atleta.mostrarInformacoes());
console.log(`Peso Ideal: ${atleta.calcularPesoIdeal()} kg\n`);

console.log(competidor.mostrarInformacoes());
console.log(`Peso Ideal: ${competidor.calcularPesoIdeal()} kg\n`);
console.log(Amador.mostrarInformacoes());
console.log(`Peso Ideal: ${Amador.calcularPesoIdeal()} kg\n`);
