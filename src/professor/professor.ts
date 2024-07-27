import { Endereco } from "../endereco/endereco";
import { Pessoa } from "../pessoa/pessoa";
import { Projeto } from "../projeto/projeto";

class Professor extends Pessoa implements Projeto {

    ////////////////////////////
    // atributos de Instancia///
    ////////////////////////////

    private _salario: number = 0;

    ////////////////////
    ///Gets e Sets//////
    ////////////////////

  public get salario(): number {
    return this._salario;
  }
  public set salario(value: number) {
    this._salario = value;
  }

    ////////////////
    // Construtor///
    ////////////////

    constructor( nome:string, sobrenome:string, sexo: string, CPF: string, idade:number, brasileiro: boolean, enderecos: Endereco[], salario: number){
        super(nome, sobrenome,sexo,CPF, idade, brasileiro, enderecos);
        this.matricula = this.gerarMartricula();
        this.salario = salario;
    
}

protected gerarMartricula(): number {
  return Math.floor(Math.random() * (99999999 - 10000000 + 1)+ 10000000);
}

public submeterProjetoPesquisa(): void {
  console.log("Isso é uma submissao de projeto de pesquisa de professor");
}
public submeterProjetoExtensao(): void {
  console.log("Isso é uma submissao de projeto de extensao de professor");
}

}

export { Professor }