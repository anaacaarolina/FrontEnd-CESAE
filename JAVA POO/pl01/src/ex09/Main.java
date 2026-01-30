package ex09;

public class Main {
    public static void main(String[] args) {

        Restaurante restaurante = new Restaurante("restaurante 1", 50);

        String reserva = restaurante.reservarMesa(20);
        int lugares = restaurante.getLugaresOcupados();
        System.out.println(reserva + " Lugares Ocupados: " + lugares);
        String libertarMesa = restaurante.libertarMesa(5);
        lugares = restaurante.getLugaresOcupados();
        System.out.println(libertarMesa + " Lugares Ocupados: " + lugares);
        reserva = restaurante.reservarMesa(40);
        System.out.println(reserva);
    }
}
