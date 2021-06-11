import { autoUpdater } from "electron-updater"

autoUpdater.logger = require("electron-log")
autoUpdater.logger.transports.file.level = "info"

export const updater = () => {
  console.log("Checking for updates")
  autoUpdater.checkForUpdates()
}
