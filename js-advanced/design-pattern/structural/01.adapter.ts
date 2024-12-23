// 小明购买了一台新电脑，该电脑使用 TypeC 接口，
// 他已经有了一个USB接口的充电器和数据线，为了确保新电脑可以使用现有的USB接口充电器和数据线，他购买了一个TypeC到USB的扩展坞。
// 请你使用适配器模式设计并实现这个扩展坞系统，确保小明的新电脑既可以通过扩展坞使用现有的USB接口充电线和数据线，也可以使用TypeC接口充电。

interface IUSB {
  usbCharge(): void;
}

interface ITypeC {
  typeCCharge(): void;
}

class USB implements IUSB {
  usbCharge(): void {}
}

// 适配器类，TypeC 扩展坞适配 USB
class TypeCAdapter implements IUSB, ITypeC {
  private usb: IUSB;

  constructor(usb: IUSB) {
    this.usb = usb;
  }

  usbCharge() {
    console.log("USB Adapter");
    this.usb.usbCharge();
  }

  typeCCharge(): void {
    console.log("TypeC");
    this.usb.usbCharge();
  }
}

function main(count: number) {
  const expand = new TypeCAdapter(new USB());

  function dfs(...args) {
    if (args.length < count) return (...arg) => dfs(...args, ...arg);

    args.forEach((item) => {
      if (item === 1) {
        expand.typeCCharge();
      } else {
        expand.usbCharge();
      }
    });
  }

  return dfs;
}

// @ts-ignore
main(3)(1)(2)(1);
