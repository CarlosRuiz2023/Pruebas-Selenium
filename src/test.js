const { Builder, Browser, By, Key, until } = require("selenium-webdriver");
const fs = require("fs");

setInterval(async () => {
  let driver = await new Builder().forBrowser(Browser.EDGE).build();
  let logStream = fs.createWriteStream("selenium.log", { flags: "a" });

  try {
    await driver.get("https://www.google.com/ncr");
    await logStream.write(`Navigated to: https://www.google.com/ncr\n`);

    await driver.findElement(By.name("q")).sendKeys("webdriver", Key.RETURN);
    await logStream.write(`Entered search term: webdriver\n`);

    await driver.wait(until.titleIs("webdriver - Google Search"), 1000);
    await logStream.write(`Title is: webdriver - Google Search\n`);
  } finally {
    await driver.quit();
    await logStream.close();
  }
}, 30000);
