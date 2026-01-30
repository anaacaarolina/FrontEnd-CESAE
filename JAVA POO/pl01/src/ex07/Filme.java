package ex07;

public class Filme {
    private String titulo;
    private String realizador;
    private String genero;
    private int duracao;
    private int classificacaoEtaria;

    /**
     * @param titulo              Título do Filme
     * @param realizador          Realizador do Filme
     * @param genero              Género do Filme
     * @param duracao             Duração do Filme, em minutos
     * @param classificacaoEtaria Classificação Etária do Filme
     */

    public Filme(String titulo, String realizador, String genero, int duracao, int classificacaoEtaria) {
        this.titulo = titulo;
        this.realizador = realizador;
        this.genero = genero;
        this.duracao = duracao;
        this.classificacaoEtaria = classificacaoEtaria;
    }

    public String gettitulo() {
        return titulo;
    }

    public String getrealizador() {
        return realizador;
    }

    public String getgenero() {
        return genero;
    }

    public int getduracao() {
        return duracao;
    }

    public int getclassificacaoEtaria() {
        return classificacaoEtaria;
    }

    public void mostrarInformacao() {
        System.out.println("====INFORMAÇÃO====");
        System.out.println("Título: " + titulo);
        System.out.println("Realizador: " + realizador);
        System.out.println("Género: " + genero);
        System.out.println("Duração: " + duracao);
        System.out.println("Classificação Etária: " + classificacaoEtaria);
    }

    public boolean podeVerFilme(int idade) {
        if (idade >= classificacaoEtaria) {
            return true;
        } else {
            return false;
        }
    }

}
