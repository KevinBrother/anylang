import constants from "@common/constants";
import { electronAPI } from "@electron-toolkit/preload";


console.log(constants.CLOSE_INNER_WINDOW);

window.good = "good";
window.electron = electronAPI;

window.electron.ipcRenderer.on("close-inner-window", () => {
  console.log("close-inner-window");
});
