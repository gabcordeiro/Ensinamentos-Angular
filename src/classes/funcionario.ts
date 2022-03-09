
export class Funcionario{
    nomeCompleto:string;
    idade:number;
    fotoUsuario:string;
    funcao:string;
    
        constructor(nomeCompleto:string, idade:number, 
            fotoUsuario:string, funcao:string) {
            this.nomeCompleto = nomeCompleto;
            this.idade = idade;
            this.fotoUsuario = fotoUsuario;
            this.funcao = funcao;
        }
}