const { Builder, Browser, By, Key, until } = require("selenium-webdriver");
const fs = require("fs");

setInterval(async () => {
  let driver = await new Builder().forBrowser(Browser.EDGE).build();
  let logStream = fs.createWriteStream("selenium.log", { flags: "a" });

  try {
    // Obtener la fecha y hora actual
    let currentDate = new Date().toLocaleString();
    try {
      // Navegar a la aplicación en localhost:3000
      await driver.get("http://localhost:3000");
      currentDate = new Date().toLocaleString();
      await logStream.write(
        `[${currentDate}] Navigated to: http://localhost:3000\n`
      );

      try {
        // Realizar acciones de inicio de sesión
        await driver.findElement(By.id("username")).sendKeys("admin");
        await driver.findElement(By.id("password")).sendKeys("admin");
        await driver.findElement(By.id("loginButton")).click(); // Suponiendo un botón de inicio de sesión con ID "loginButton"
        currentDate = new Date().toLocaleString();
        await logStream.write(`[${currentDate}] User 'admin' logueado\n`);
        // Esperar 5 segundos después de hacer clic en el botón de inicio de sesión
        currentDate = new Date().toLocaleString();
        await logStream.write(
          `[${currentDate}] User 'admin' Accedio al catalogo de clientes\n`
        );
        await driver.sleep(5000); // Espera 5 segundos (5000 milisegundos)
        try {
          const searchInput1 = await driver.findElement(By.name("nombre"));
          await searchInput1.sendKeys("charly nivel 12");
          const searchBtn1 = await driver.findElement(By.id("search"));
          await searchBtn1.click();
          currentDate = new Date().toLocaleString();
          await logStream.write(
            `[${currentDate}] User 'admin'  Busco un Cliente\n`
          );
          await driver.sleep(4000);
        } catch (err) {
          currentDate = new Date().toLocaleString();
          await logStream.write(
            `[${currentDate}] Error!!!!!! No fue posible encontrar a Charly nivel 12\n`
          );
        }
        try {
          // Hacer clic en el enlace de Ventas en el header
          await driver.findElement(By.linkText("Ventas")).click();
          currentDate = new Date().toLocaleString();
          await logStream.write(
            `[${currentDate}] User 'admin' Accedio al catalogo de ventas\n`
          );
          // Esperar a que se cargue la página de Ventas
          await driver.sleep(4000);
        } catch (err) {
          currentDate = new Date().toLocaleString();
          await logStream.write(
            `[${currentDate}] Error!!!!!! No fue posible acceder al catalogo de ventas\n`
          );
        }
      } catch (err) {
        currentDate = new Date().toLocaleString();
        await logStream.write(
          `[${currentDate}] Error!!!!!! No fue posible loguearse\n`
        );
      }
    } catch (err) {
      currentDate = new Date().toLocaleString();
      await logStream.write(
        `[${currentDate}] Error!!!!!! No fue posible acceder a: http://localhost:3000\n`
      );
    }
  } finally {
    // Cerrar el navegador después de las pruebas
    await driver.quit();
  }
}, 60000);
