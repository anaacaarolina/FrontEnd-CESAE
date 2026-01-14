package ex02;

//Definição da classe pública Pessoa
public class Pessoa {
    //Declare variáveis para armazenar o seu nome, idade e altura. 
    // Imprima uma frase que utilize as três variáveis.

    //Método main: ponto de entrada para a execução do programa em Java
    public static void main(String[] args) {
        
        //Declaraçãoo e inicialização de variáveis
        String nome = "Carolina"; //Variável: 'nome' do tipo String
        int idade = 22; //Variável: 'idade' do tipo int
        double altura = 1.6; //Variável: 'altura' do tipo double
        
        //Impre uma mensagem na consola concatenando o texto com os valores das variáveis
        System.out.println("O meu nome é "+nome+". Tenho "+idade+" anos e "+altura+"m de altura");
    }
}
