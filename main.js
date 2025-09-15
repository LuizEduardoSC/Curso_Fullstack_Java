// Classe de abstração
class Veiculo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    exibirInfo() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}`);
    }
}

// Classes herdeiras
class Carro extends Veiculo {
    constructor(marca, modelo, portas) {
        super(marca, modelo);
        this.portas = portas;
    }

    exibirInfo() {
        super.exibirInfo();
        console.log(`Portas: ${this.portas}`);
    }
}

class Moto extends Veiculo {
    constructor(marca, modelo, cilindradas) {
        super(marca, modelo);
        this.cilindradas = cilindradas;
    }

    exibirInfo() {
        super.exibirInfo();
        console.log(`Cilindradas: ${this.cilindradas}cc`);
    }
}

// Instâncias de objetos
const carro1 = new Carro("Toyota", "Corolla", 4);
const carro2 = new Carro("Honda", "Civic", 4);
const moto1 = new Moto("Yamaha", "MT-07", 689);

// Exibindo informações
carro1.exibirInfo();
carro2.exibirInfo();
moto1.exibirInfo();
