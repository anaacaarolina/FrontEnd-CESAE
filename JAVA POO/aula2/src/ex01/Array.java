package ex01;

public class Array {
    public static void main(String[] args) {
// Crie um array de 5 números inteiros. 
// Utilize um loop para calcular e imprimir a soma de todos os elementos.
        int [] numeros = {1,2,3,4,5};
        int soma=0;

        for(int i=0; i<numeros.length;i++){
            soma+=numeros[i];
        }
        System.out.println(soma);
    }
}
