import com.other;

class MainDemo {
    public static void main(String[]args){
        Swap swap = new Swap();
        int a = 10, b = 20;
        System.out.println("Before swap: a = " + a + ", b = " + b);
        swap.swap(a, b);
        System.out.println("After swap: a = " + a + ", b = " + b);

        MyUtils.print("Hello, world! from MyUtils");
        System.out.println("可以输入参数来解析");
        System.out.println(args); //[ljava.lang.string;@139a55  “[”代表数组， “l”代表long , "@139a55"代表哈希值
        System.out.println(args.length);  //默认长度为0
        for(int i = 0; i < args.length; i++)
            System.out.println(args[i]);
    }
}