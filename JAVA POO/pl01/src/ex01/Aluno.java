package ex01;

public class Aluno {
     private String nome;
    private int numero;
    private double media;

    /**
     * @param nome Nome do aluno
     * @param numero Numero de estudante do aluno
     * @param media Media do aluno
     */
    public Aluno (String nome, int numero, double media){
        this.nome = nome;
        this.numero = numero;
        this.media = media;
    }
    public String getNome(){
        return nome;
    }
    public int getNumero(){
        return numero;
    }
    public double getMedia(){
        return media;
    }
}
