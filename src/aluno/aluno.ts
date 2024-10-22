import { Endereco } from "../endereco/endereco";
import { Pessoa } from "../pessoa/pessoa";
import { Projeto } from "../projeto/projeto";

class Aluno extends Pessoa implements Projeto{

    //////////////////////////
    // atributos de Instancia///
    ////////////////////////////

    private _curso: string = '';
    private _situacao: SituacaoAluno = SituacaoAluno.ATIVO;  // Situacao estrutural - Composição - A partir de atributo
    

    ////////////////////
    ///Gets e Sets//////
    ////////////////////

    public get curso(): string {
        return this._curso;
    }
    public set curso(value: string) {
        this._curso = value;
    }

    public get situacao(): SituacaoAluno {
        return this._situacao;
    }
    public set situacao(value: SituacaoAluno) {
        this._situacao = value;
    }

    /////////////////////////
    //Construtor///
    /////////////////////////

    constructor(nome:string, sobrenome:string, sexo: string, CPF: string, idade:number, brasileiro: boolean, enderecos: Endereco[], curso: string, situcao: SituacaoAluno){
        super(nome, sobrenome,sexo,CPF, idade, brasileiro, enderecos);
        this.matricula = this.gerarMartricula();
        this.curso = curso;
        this.situacao = situcao;
    }
   
    ////////////////////////////
    // Metodos de Instancia///
    ////////////////////////////

    protected gerarMartricula(): number {
        let ano: number = new Date().getFullYear();
        let numero: number = Math.floor(Math.random() * (9999-1000+1)+ 1000);
        return Number(`${ano}${numero}`)
    }

    public submeterProjetoPesquisa(): void {
        throw new Error("Isso é uma submissao de projeto de pesquisa de aluno");
    }
    public submeterProjetoExtensao(): void {
        throw new Error("Isso é uma submissao de projeto de extensao de aluno");
    }

}
   
enum SituacaoAluno{
    ATIVO = "Ativo",
    MATRICULADO = "Matriculado",
    TRANCADO = "Trancado",
    CONCLUIDO = "Concluido",
    CANCELADO = "Cancelado",
    FORMANDO = "Formando"
}

export{ Aluno, SituacaoAluno}