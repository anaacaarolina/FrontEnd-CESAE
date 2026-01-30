package ex01;

public class Main {
    public static void main(String[] args) {
        Aluno aluno1 = new Aluno("João Silva", 12345, 15.5);   
        Aluno aluno2 = new Aluno("Beatriz Figueiredo", 54321, 18);   
        Aluno aluno3 = new Aluno("Inês Castro", 51432, 13.7);
        
        System.out.println("===Aluno 1===");
        System.out.println("Nome: "+aluno1.getNome());
        System.out.println("Número: "+aluno1.getNumero());
        System.out.println("Média: "+aluno1.getMedia());
        
        System.out.println("===Aluno 2===");
        System.out.println("Nome: "+aluno2.getNome());
        System.out.println("Número: "+aluno2.getNumero());
        System.out.println("Média: "+aluno2.getMedia());
        
        System.out.println("===Aluno 3===");
        System.out.println("Nome: "+aluno3.getNome());
        System.out.println("Número: "+aluno3.getNumero());
        System.out.println("Média: "+aluno3.getMedia());
}   
}
