package ex02;

public class Gato {
    private String nome;
    private String pelo;
    private String som;

    /**
     * @param nome Nome do gato
     * @param pelo Cor do pelo do gato
     * @param som  Som do gato
     */
    public Gato(String nome, String pelo) {
        this.nome = nome;
        this.pelo = pelo;
        this.som = "miau";
    }

    /**
     * Método miar: imprime na consola o nome do gato e o seu som atual;
     * Método brincar: imprime na consola o nome do gato e diz que está a brincar
     */

    public void miar() {
        System.out.println(nome + " diz " + som);
    }

    public void brincar() {
        System.out.println(nome + " está a brincar");
    }

    /**
     * Método Getter: permite ler os construtores dos atributos privados
     * 
     * @return nome do gato
     */
    public String getNome() {
        return nome;
    }

    public String getPelo() {
        return pelo;
    }

    public String getSom() {
        return som;
    }

    /**
     * Método Setter: permite alterar os conteúdos dos atributos privados
     * 
     * @param novoSom o novo som do gato
     */

    public void setSom(String novoSom) {
        this.som = novoSom;
    }

}
