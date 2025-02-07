import constants from "@common/constants";
import { electronAPI } from "@electron-toolkit/preload";
import "./debug";
import "./decorators";
import "./base";

console.log(constants.CLOSE_INNER_WINDOW);

window.good = "good";
window.electron = electronAPI;

window.__ = (str: string) => str;

console.log(__("hello"));
window.electron.ipcRenderer.on("close-inner-window", () => {
  console.log("close-inner-window");
});
