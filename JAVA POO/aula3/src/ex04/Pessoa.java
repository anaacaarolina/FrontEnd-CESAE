package ex04;
/* 
* Classe que representa uma Pessoa
* Este é um exemplo simples de classes em Java

* Dica:
* Começamos por criar esta classe (Pessoa) antes da classe Main
* Faz mais sentido definir "o que é uma pessoa" (o molde) antes de criar objetos dessa classe no Main
* É a analogia da planta da casa vs. a construção da casa 

 */
public class Pessoa {
    //Atributos da classe Pessoa
    private String nome; //Private: só pode ser acedido dentro da própria classe
    private int idade;
    private double altura;
    
    /**
    * Construtor da classe Pessoa
    * o construtor +e um método especial usado para inicializar objeto
    * É chamado quando criamos um novo objeto da classe com o operador "new"
    * 
    * @param nome Nome da Pessoa
    * @param idade Idade da Pessoa
    * @param altura Altura da Pessoa
    */

    public Pessoa(String nome, int idade, double altura){
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }

    // Métodos Getter para obter os valores, que permitem ler os valores dos atributos privados

    public String getNome(){
        return nome;
    }
        public int getIdade(){
        return idade;
    }
        public double getAltura(){
        return altura;
    }
}
