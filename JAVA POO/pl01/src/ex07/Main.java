package ex07;

public class Main {
    public static void main(String[] args) {
        Filme filme1 = new Filme("Frankenstein", "Carolina", "horror", 120, 16);
        Filme filme2 = new Filme("Noddy", "Ricardo", "aventura", 92, 6);

        filme1.mostrarInformacao();
        filme2.mostrarInformacao();

        String tituloFilme1 = filme1.gettitulo();
        String tituloFilme2 = filme2.gettitulo();

        boolean verFilme1 = filme1.podeVerFilme(12);
        boolean verFilme2 = filme2.podeVerFilme(4);

        if (verFilme1 && verFilme2) {
            System.out.println("Pode ver os dois filmes");
        } else if (verFilme1 && !verFilme2) {
            System.out.println("Pode ver o filme " + tituloFilme1 + ", mas não pode ver o filme " + tituloFilme2);
        } else if (!verFilme1 && verFilme2) {
            System.out.println("Pode ver o filme " + tituloFilme2 + ", mas não pode ver o filme " + tituloFilme1);
        } else {
            System.out.println("Não pode ver nenhum dos filmes");
        }
    }
}
