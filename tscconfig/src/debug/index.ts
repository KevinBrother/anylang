import path from "path";
import { add } from "./add";
const content = path.resolve(__dirname, "./index.ts")

console.log(content);

console.log(add(1, 2));

for (let i = 0; i < 2; i++) {
  console.log(i);
}
    