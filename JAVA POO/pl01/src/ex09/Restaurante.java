package ex09;

public class Restaurante {
    private String nome;
    private int capacidadeMaxima;
    private int lugaresOcupados;

    /**
     * @param nome             Nome do Restaurante
     * @param capacidadeMaxima Número máximo de lugares do Restaurante
     * @param lugaresOcupados  Lugares ocupados no Restaurante
     */

    public Restaurante(String nome, int capacidadeMaxima) {
        this.nome = nome;
        this.capacidadeMaxima = capacidadeMaxima;
        this.lugaresOcupados = 0;
    }

    public String getNome() {
        return nome;
    }

    public int getCapacidadeMaxima() {
        return capacidadeMaxima;
    }

    public int getLugaresOcupados() {
        return lugaresOcupados;
    }

    public String reservarMesa(int lugaresDesejados) {
        if ((lugaresDesejados + lugaresOcupados) <= capacidadeMaxima) {
            lugaresOcupados += lugaresDesejados;
            return "A reserva foi concluída com sucesso";
        } else {
            return "Não é possível fazer a reserva, a lotação está esgotada";
        }
    }

    public String libertarMesa(int lugaresDesejados) {
        if (lugaresDesejados <= lugaresOcupados) {
            lugaresDesejados -= lugaresOcupados;
            return "A mesa foi libertada";
        } else {
            return "Não é possível libertar esse número de lugares";
        }
    }

}
