/*
  Todos os atributos necessários. Assim, usando Try e Catch, trate os erros e apresente uma mensagem quando houve atributos vazios.
*/

class Estudante {
  constructor(nome, idade, turma) {
    this.nome = nome;
    this.idade = idade;
    this.turma = turma;
  }

  mostrarAtributos() {
    try{
      return this.atributos();
    } catch(erro){
      console.log(erro.name)
    }
  }

  atributos() {
    if (this.nome != "" && this.idade != "" && this.turma != ""){
      return {
        nome: this.nome,
        idade: this.idade,
        turma: this.turma
      } } else{
        throw new Error("Está faltando nome e/ou idade e/ou turma. ;)")
      }
  }
}

const estudante = new Estudante("João", 16, "3A");

const atributos = estudante.mostrarAtributos();

/* console.log(atributos.nome);   
console.log(atributos.idade);  
console.log(atributos.turma);  */

