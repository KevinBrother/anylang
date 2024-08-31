package inf;

public class InterfaceT {
    public static void main(String[] args) {
       // InterfaceExample ie1 = new InterfaceExample(); // 'InterfaceExample' is abstract; cannot be instantiated
        InterfaceExample ie2 = new InterfaceImplementExample();
        ie2.func1();
        System.out.println(InterfaceExample.x);
    }
}