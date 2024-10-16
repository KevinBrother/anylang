// 小明去了一家大型商场，拿到了一个购物车，并开始购物。
// 请你设计一个购物车管理器，记录商品添加到购物车的信息（商品名称和购买数量），
// 并在购买结束后打印出商品清单。（在整个购物过程中，小明只有一个购物车实例存在）

interface IProduct {
  name: string;
  quantity: number;
}

interface IShoppingCartManager {
  add(name: string, quantity: number);
  viewCart();
}

class ShoppingCartManager implements IShoppingCartManager {
  private static instance: ShoppingCartManager;
  private products: IProduct[] = [];

  private constructor() {}

  static getInstance() {
    if (!ShoppingCartManager.instance) {
      ShoppingCartManager.instance = new ShoppingCartManager();
    }
    return ShoppingCartManager.instance;
  }

  add(name: string, quantity: number) {
    this.products.push({ name, quantity });
  }

  viewCart() {
    this.products.forEach(({ name, quantity }) => {
      console.log(name, quantity);
    });
  }
}

const instance = ShoppingCartManager.getInstance();

instance.add("Apple", 3);
instance.add("Banana", 2);
instance.add("Orange", 5);

instance.viewCart();

export {};
