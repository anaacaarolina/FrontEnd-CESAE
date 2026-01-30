package ex12;

public class Main {
    public static void main(String[] args) {
        Jogo sims = new Jogo("The Sims4", "PC", 14.99);
        Jogo sdv = new Jogo("Stardew Valley", "Mobile", 7.69);
        Jogo mc = new Jogo("Minecraft", "PlayStation", 27.21);

        sims.jogar(4.5);
        sdv.jogar(421.1);
        mc.jogar(135.7);

        sims.avaliar(6.8);
        sdv.avaliar(9.2);
        mc.avaliar(7.4);

        sims.mostrarDetalhes();
        sdv.mostrarDetalhes();
        mc.mostrarDetalhes();
    }
}
