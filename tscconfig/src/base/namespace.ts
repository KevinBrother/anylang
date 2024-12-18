namespace Base {
  declare const age: number;

  export const name = "base";

  export function getName() {
    return name;
  }

  function getName3() {
    return name2;
  }

  export declare const name2: string;
  export declare function getName2(): string;

  (function () {
    const name2 = "name2";
    const getName2 = () => name2;
  });
}


(function (abc) {
  console.log(abc);
  const name2 = "name2";
  const getName2 = () => name2;
})(123);
