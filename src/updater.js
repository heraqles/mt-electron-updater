import { autoUpdater } from "electron-updater"

autoUpdater.logger = require("electron-log")
autoUpdater.logger.transports.file.level = "info"

export default () => {
  console.log("Checking for updates")
  autoUpdater.checkForUpdates()
  console.log("Checking for updates 2")
}
