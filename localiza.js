class Carro {
    constructor(placa, ano, cor, modelo, quilometragem, valorDiario, observacao) {
        this.placa = placa;
        this.ano = ano;
        this.cor = cor;
        this.modelo = modelo;
        this.quilometragem = quilometragem;
        this.valorDiario = valorDiario;
        this.observacao = observacao;
    }

    getPlaca() {
        return this.placa;
    }
}

class Esportivo extends Carro {
    constructor(placa, ano, cor, modelo, quilometragem, valordiario, observacao, tempo100km, melhorias) {
        super(placa, ano, cor, modelo, quilometragem, valordiario, observacao);
        this.tempo100km = tempo100km;
        this.melhorias = melhorias;
    }
}

class Utilitario extends Carro {
    constructor(placa, ano, cor, modelo, quilometragem, valordiario, observacao, passageiros, bagageiro, kmLitro) {
        super(placa, ano, cor, modelo, quilometragem, valordiario, observacao);
        this.passageiros = passageiros;
        this.bagageiro = bagageiro;
        this.kmLitro = kmLitro;
    }
}

class Reserva {
    constructor(codigo, carro, cliente, status, dtInicio, dtFim) {
        this.codigo = codigo;
        this.carro = carro;
        this.cliente = cliente;
        this.status = status;
        this.dtInicio = dtInicio;
        this.dtFim = dtFim;
    }

    getCliente() {
        return this.cliente;
    }

    getStatus() {
        return this.status;
    }

    changeStatus(status) {
        this.status = status;
    }
}

class Pessoa {
    constructor(nome, cpf, idade, endereco, telefone) {
        this.nome = nome;
        this.cpf = cpf;
        this.idade = idade;
        this.endereco = endereco;
        this.telefone = telefone;
    }

    getCPF() {
        return this.cpf;
    }

    getNome() {
        return this.nome;
    }
}

class Funcionario extends Pessoa {
    constructor(nome, cpf, idade, endereco, telefone, dataContratacao, salario, qntAlugueis, status) {
        super(nome, cpf, idade, endereco, telefone);        
        this.dataContratacao = dataContratacao;
        this.salario = salario;
        this.qntAlugueis = qntAlugueis;
        this.status = status;        
    }    
}

class Cliente extends Pessoa {
    constructor(nome, cpf, idade, endereco, telefone, nascimento, carteiraMotorista, fotoMotorista, vencimentoMotorista, email) {
        super(nome, cpf, idade, endereco, telefone);
        this.nascimento = nascimento;
        this.carteiraMotorista = carteiraMotorista;
        this.fotoMotorista = fotoMotorista;
        this.vencimentoMotorista = vencimentoMotorista;
        this.email = email;
    }
}

class Promocao {
    constructor(titulo, descricao, dtValidade) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.dtValidade = dtValidade;
    }
}

class Localiza {
    constructor() {
        this.clientes = [];
        this.carros = [];
        this.funcionarios = [];
        this.reservas = [];
    }

    addCliente(cliente) {
        this.clientes.push(cliente);
    }

    getNomeCliente(cpf){
        return this.clientes.filter(cliente => {
            if (cliente.getCPF() == cpf) {
                return cliente;
            }
        }) [0];
    }

    getListarClientes() {
        return this.clientes;
    }

    addCarro(carro) {
        this.carros.push(carro);
    }

    getCarro(placa){
        return this.carros.filter(carro => {
            if (carro.getPlaca() == placa) {
                return carro;
            }
        }) [0];
    }

    getListarCarros() {
        return this.carros;
    }

    addFuncionario(funcionario) {
        this.funcionarios.push(funcionario);
    }

    getFuncionario(cpf) {
        return this.funcionarios.filter(funcionario => {
            if (funcionario.getCPF() == cpf) {
                return funcionario;
            }
        }) [0];
    }

    getListarFuncionarios() {
        return this.funcionarios;
    }

    addReserva(reserva) {
        this.reservas.push(reserva);
    }

    getListarReservas() {
        return this.reservas;
    }

    analisarReserva(cliente) {
        if (this.reservas.filter(reserva => reserva.getCliente().getNome() == cliente).length > 1) {
            return this.reservas.filter(reserva => reserva.getCliente().getNome() == cliente)[0].changeStatus("Confirmada") + this.reservas.filter(reserva => reserva.getCliente().getNome() == cliente)[1].changeStatus("Negada");
        } else if (this.reservas.filter(reserva => reserva.getCliente().getNome() == cliente).length == 0) {
            console.log(`${cliente} não possui reserva`);
        } else {
            return this.reservas.filter(reserva => reserva.getCliente().getNome() == cliente)[0].changeStatus("Confirmada");
        }
    }
}

var localiza1 = new Localiza();
var emanoel = new Cliente("Emanoel", "12345", 29, "Rua X", "12345", "22/01/95", "12345", "", "05/29", "emanoel@gmail.com");
var pedro = new Cliente("Pedro", "57883", 21, "Rua Cazé Júnior", "353214", "09/03/2003", "392858", "", "07/26", "pedro@gmail.com");
var claudia = new Funcionario("Claudia", "23456", 30, "Rua Galdino Pereira", "95836", "22/10/2013", 5000, 10, "Ativo");
var fiat = new Utilitario("KGB1A23", 2011, "Preto", "Uno", 230000, 100, "Econômico", 5, 2.5, 9.5);
var reserva1 = new Reserva(275845, fiat, emanoel, "Pendente", "07/08/2024", "09/08/2024");
var reserva2 = new Reserva(275869, fiat, emanoel, "Pendente", "07/08/2024", "09/08/2024");

localiza1.addCliente(emanoel);
localiza1.addCliente(pedro);
localiza1.addFuncionario(claudia);
localiza1.addCarro(fiat);
localiza1.addReserva(reserva1);
localiza1.addReserva(reserva2);
localiza1.analisarReserva("Pedro");

console.log(localiza1.getListarCarros());
console.log(localiza1.getCarro("KGB1A23").getPlaca());
console.log(localiza1.getListarReservas());