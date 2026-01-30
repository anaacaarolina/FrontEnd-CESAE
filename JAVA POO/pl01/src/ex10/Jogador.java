package ex10;

public class Jogador {
    private String nome;
    private int pontos;
    private int nivel;
    private String equipa;

    public Jogador(String nome, String equipa) {
        this.nome = nome;
        this.pontos = 0;
        this.nivel = 0;
        this.equipa = equipa;
    }

    public String getNome() {
        return nome;
    }

    public int getPontos() {
        return pontos;
    }

    public int getNivel() {
        return nivel;
    }

    public String getEquipa() {
        return equipa;
    }

    public int ganharPontos(int quantidadePontos) {
        pontos += quantidadePontos;
        int novoNivel = pontos / 100;
        if (novoNivel > nivel) {
            nivel = novoNivel;
        }
        return nivel;
    }

    public void mostrarEstatisticas() {
        System.out.println("==== " + nome + " ====");
        System.out.println("Pontos totais: " + pontos);
        System.out.println("Nível atual: " + nivel);
        System.out.println("Equipa: " + equipa);
    }
}
