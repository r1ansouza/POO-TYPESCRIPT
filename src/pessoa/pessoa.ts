import { Endereco } from "../endereco/endereco";

 abstract class Pessoa {

    ////////////////////////////
    // atributos de Instancia///
    ////////////////////////////

    protected _matricula: number = 0;
    private _nome: string = '';
    private _sobrenome: string = '';
    private _sexo: string = '';
    private _CPF:string = ''
    private _idade: number = 0;
    private _brasileiro: boolean = true;
    private _enderecos: Endereco[] = []; // ou let enderecos: Array<string>;

    /////////////////////////
    // atributos Estaticos///
    /////////////////////////

    private static quantidadedePessoas: number = 0; 

     ////////////////
    // Gets e Sets///
    ////////////////

    public get matricula(): number{
        return this._matricula;
    }

    protected set matricula(valor:number){
        this._matricula = valor;
    }


    public get nome(): string{
        return this.nome;
    }

    public set nome(valor:string){
        this._nome = valor;
    }

    public get sobrenome(): string {
        return this._sobrenome;
    }
    public set sobrenome(value: string) {
        this._sobrenome = value;
    }

    public get sexo(): string {
        return this._sexo;
    }
    public set sexo(value: string) {
        this._sexo = value;
    }

    public get CPF (): string{
        return this.CPF;
    }

    public set CPF(valor:string){
       let padraoCPF: RegExp = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}$/; // Associacao comportamental
       if(padraoCPF.test(valor)){
        this._CPF = valor
       }
       else{
        throw Error("CPF Invalido")
       }
    }
    public get idade(): number {
        return this._idade;
    }
    public set idade(value: number) {
        this._idade = value;
    }
    public get brasileiro(): boolean {
        return this._brasileiro;
    }
    public set brasileiro(value: boolean) {
        this._brasileiro = value;
    }
    public get enderecos(): Endereco[] {
        return this._enderecos;
    }
    public set enderecos(value: Endereco[]) {
        this._enderecos = value;
    }

    
    ////////////////
    // Construtor///
    ////////////////



    constructor(nome: string, sobrenome: string, sexo: string, CPF: string, idade: number, brasileiro: boolean, enderecos: Endereco[]){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.sexo = sexo;
        this.CPF = CPF
        this.idade = idade;
        this.brasileiro = brasileiro;
        this.enderecos = enderecos;
        Pessoa.quantidadedePessoas++;
    }

    //////////////////////////
    // Metodos de Instancia //
    //////////////////////////



    public exibirNomeCompleto(): string {
        return (`O nome completo é: ${this.nome} ${this.sobrenome}`);
    }
    
    public recuperarendereco(posicao: number): Endereco {
        return this.enderecos[posicao];
    }

    ///////////////////////
    // Metodos Estaticos //
    ///////////////////////


    public static getQuantidadePessoas(): number {
        return Pessoa.quantidadedePessoas;
    }

    
    ///////////////////////
    // Metodos Abstratos //
    ///////////////////////

    // Metodo abtrato - Sem implementação
    //
    //

    protected abstract gerarMartricula(): number;

}

export{ Pessoa }