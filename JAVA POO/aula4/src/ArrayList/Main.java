package ArrayList;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        ArrayList<Carro> garagem = new ArrayList<>();

        System.out.println("===== GESTÃO DE GARAGEM =====");
        System.out.println("1. ADICIONAR CARROS À GARAGEM");

        // garagem.add(new Carro("BMW", "M3", 300));
        // System.out.println("Carro adicionado à garagem: " + garagem.get(0));
        // garagem.add(new Carro("Toyota", "Corolla", 180));
        // System.out.println("Carro adicionado à garagem: " + garagem.get(1));
        // garagem.add(new Carro("Ford", "Focus", 240));
        // System.out.println("Carro adicionado à garagem: " + garagem.get(2));
        // garagem.add(new Carro("Audi", "A3", 250));
        // System.out.println("Carro adicionado à garagem: " + garagem.get(3));
        // garagem.add(new Carro("Ferrari", "F8", 350));
        // System.out.println("Carro adicionado à garagem: " + garagem.get(4));

        // Adicionar vários carros de uma só vez
        garagem.addAll(List.of(
                new Carro("BMW", "M3", 300),
                new Carro("Toyota", "Corolla", 180),
                new Carro("Ford", "Focus", 240),
                new Carro("Audi", "A3", 250),
                new Carro("Ferrari", "F8", 350)));

        System.out.println("2. CONSULTAR INFORMAÇÕES DA GARAGEM");
        System.out.println("Total de carros na garagem: " + garagem.size());
        System.out.println("Primeiro carro da garagem: " + garagem.get(0));
        System.out.println("Último carro da garagem: " + garagem.get(garagem.size() - 1));
        System.out.println("Todos os carros na garagem: ");
        imprimirGaragem(garagem);
        System.out.println("3. ACEDER A UM CARRO ESPECÍFICO");
        garagem.get(2).acelerar(50);
        System.out.println("Carro no indice 2 após acelerar " + garagem.get(2));
        System.out.println("4. MODIFICAR UM CARRO");
        System.out.println("Carro antes da modificação: " + garagem.get(0));
        garagem.set(0, new Carro("Peugeot", "308", 180));
        System.out.println("Carro depois da modificação: " + garagem.get(0));

        System.out.println("5. REMOVER UM CARRO");
        System.out.println("Carro antes da modificação: " + garagem.get(0));
        garagem.remove(0);
        System.out.println("Garagem após remover carro: ");
        imprimirGaragem(garagem);

        System.out.println("6. VERIFICAR EXISTÊNCIA");
        boolean existe = existeCarro(garagem, "Audi", "A3");

        System.out.println("Existe Audi A3 na garagem? " + (existe ? "Sim" : "Não"));

        System.out.println("7. OPERAÇÕES ÚTEIS");
        System.out.println("Total de carros na garagem: " + garagem.size());
        System.out.println("Garagem está vazia? " + (garagem.isEmpty() ? "Sim" : "Não"));
        for (Carro carro : garagem) {
            carro.acelerar(10);
            System.out.println(carro);
        }

        System.out.println("8. ODERNAR CARROS");
        Collections.sort(garagem, (Carro1, Carro2) -> Carro1.getMarca().compareToIgnoreCase(Carro2.getMarca()));
        System.out.println("Garagem após a ordernação por marca");
        imprimirGaragem(garagem);

        System.out.println("8. ODERNAR CARROS (por velocidade máxima)");
        Collections.sort(garagem,
                (Carro1, Carro2) -> Integer.compare(Carro1.getVelocidadeMaxima(), (Carro2.getVelocidadeMaxima())));
        System.out.println("Garagem após a ordernação por velocidade máxima");
        imprimirGaragem(garagem);

        System.out.println("9. LIMPAR GARAGEM");
        System.out.println("Total de carros antes de limpar: " + garagem.size());
        garagem.clear();
        System.out.println("Total de carros depois de limpar: " + garagem.size());
        System.out.println("Garagem está vazia? " + (garagem.isEmpty() ? "Sim" : "Não"));
    }

    /**
     * Método auxiliar que imprime todos os carros da garagem
     * 
     * @param garagem Arraylist de carros
     */
    public static void imprimirGaragem(ArrayList<Carro> garagem) {
        if (garagem.isEmpty()) {
            System.out.println("A garagem está vazia");
            return;
        }
        for (Carro carro : garagem) {
            System.out.println(carro);
        }
    }

    /**
     * Método auxiliar que verifica se existe um carro específico na garagem
     * 
     * @param garagem
     * @param marca
     * @param modelo
     * @return true se o carro existe, false caso contrário
     */
    private static boolean existeCarro(ArrayList<Carro> garagem, String marca, String modelo) {
        for (Carro carro : garagem) {
            // Se encontra um carro com a mesma marca e model, retorna true
            if (carro.getMarca().equalsIgnoreCase(marca) && carro.getModelo().equalsIgnoreCase(modelo)) {
                return true;
            }
        }
        return false;
    }
}
