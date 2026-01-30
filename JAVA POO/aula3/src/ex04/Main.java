package ex04;
//Classe principal para executar o exercício
public class Main {
public static void main(String[] args) {
    // criar os objectos
    Pessoa pessoa1 = new Pessoa("Carolina", 22, 1.6);
    Pessoa pessoa2 = new Pessoa("Ricardo",25, 1.61);
    Pessoa pessoa3 = new Pessoa("Mariana",20, 1.65);

    System.out.println("=== Pessoa 1 ===");
    System.out.println("Nome: "+pessoa1.getNome());
    System.out.println("Idade: "+pessoa1.getIdade());
    System.out.println("Altura: "+pessoa1.getAltura());

    System.out.println("=== Pessoa 2 ===");
    System.out.println("Nome: "+pessoa2.getNome());
    System.out.println("Idade: "+pessoa2.getIdade());
    System.out.println("Altura: "+pessoa2.getAltura());

    System.out.println("=== Pessoa 3 ===");
    System.out.println("Nome: "+pessoa3.getNome());
    System.out.println("Idade: "+pessoa3.getIdade());
    System.out.println("Altura: "+pessoa3.getAltura());
}    
}
