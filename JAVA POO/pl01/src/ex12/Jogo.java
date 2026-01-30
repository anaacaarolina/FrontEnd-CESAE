package ex12;

public class Jogo {
    private String titulo;
    private String plataforma;
    private double preco;
    private double horasJogadas;
    private double classificacao;

    public Jogo(String titulo, String plataforma, double preco) {
        this.titulo = titulo;
        this.plataforma = plataforma;
        this.preco = preco;
        this.horasJogadas = 0;
        this.classificacao = 0;
    }

    public String getTitulo() {
        return titulo;
    }

    public String getPlataforma() {
        return plataforma;
    }

    public double getPreco() {
        return preco;
    }

    public double getHorasJogadas() {
        return horasJogadas;
    }

    public double getClassificacao() {
        return classificacao;
    }

    public void jogar(double horas) {
        if (horas < 0) {
            System.out.println("Não é possível jogar horas negativas");
        } else if (horas == 0) {
            System.out.println("As horas jogadas mantêm-se as mesmas");
        } else {
            horasJogadas += horas;
        }
    }

    public void avaliar(double avaliacao) {
        if (avaliacao < 0) {
            System.out.println("Não é possível atribuir uma classificação negativa");
        } else {
            classificacao += avaliacao;
            System.out.println("A classificação do jogo " + titulo + " é: " + classificacao);
        }
    }

    public double calcularValorPorHora() {
        if (horasJogadas == 0) {
            System.out.println("Ainda não jogou este jogo tempo suficiente para este cálculo");
            double valorPorHora = 0;
            return valorPorHora;
        } else {
            double valorPorHora = preco / horasJogadas;
            return valorPorHora;
        }
    }

    public void mostrarDetalhes() {
        double valorPorHora = calcularValorPorHora();
        System.out.println("\n==== " + titulo + " ====");
        System.out.println("Plataforma: " + plataforma);
        System.out.printf("Preço: %.2f%n", preco);
        System.out.printf("Horas Jogadas: %.2f%n", horasJogadas);
        if (valorPorHora != 0) {
            System.out.printf("Valor por Hora: %.2f%n", valorPorHora);
        }
        System.out.printf("Avaliação: %.2f", classificacao);
    }
}
