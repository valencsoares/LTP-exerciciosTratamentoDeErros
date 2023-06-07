class DeuErrado extends Error {
  constructor(mensagem){
    super(mensagem);
    this.name = "Meu Erro";
  }
}

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
      console.log(erro.message)
    }
  }

  atributos() {
    if (this.nome != "" && this.idade != "" && this.turma != ""){
      return {
        nome: this.nome,
        idade: this.idade,
        turma: this.turma
      } } else{
        throw new DeuErrado("Está faltando nome e/ou idade e/ou turma. ;)")
      }
  }
}

const estudante = new Estudante("João", 16, "3A");
const atributos = estudante.mostrarAtributos();

/* console.log(atributos.nome);   
console.log(atributos.idade);  
console.log(atributos.turma);  */

