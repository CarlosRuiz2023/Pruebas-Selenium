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
        `[${currentDate}] Se accedio a: http://localhost:3000\n`
      );
      try {
        // Realizar acciones de inicio de sesión
        await driver.findElement(By.id("username")).sendKeys("admin");
        await driver.findElement(By.id("password")).sendKeys("admin");
        await driver.findElement(By.id("loginButton")).click(); // Suponiendo un botón de inicio de sesión con ID "loginButton"
        currentDate = new Date().toLocaleString();
        await logStream.write(`[${currentDate}] User 'admin' logueado in\n`);
        // Esperar 5 segundos después de hacer clic en el botón de inicio de sesión
        currentDate = new Date().toLocaleString();
        await logStream.write(
          `[${currentDate}] User 'admin' Accedio al catalogo de clientes in\n`
        );
        await driver.sleep(2000); // Espera 5 segundos (5000 milisegundos)
        try {
          // Hacer clic en el botón Nuevo Cliente
          await driver.findElement(By.linkText("Nuevo Cliente")).click();
          currentDate = new Date().toLocaleString();
          await logStream.write(
            `[${currentDate}] User 'admin'  Accedio al componente de agregar Cliente\n`
          );
          await driver.findElement(By.id("nombre")).sendKeys("prueba");
          await driver.findElement(By.id("telefono")).sendKeys("4771234567");
          await driver
            .findElement(By.id("email"))
            .sendKeys("prueba2021@example.com");
          const select = await driver.findElement(By.id("estado"));
          await select.click();
          await driver.sleep(2000); // Espera 5 segundos (5000 milisegundos)
          await driver.wait(
            until.elementsLocated(By.css("select#estado option"))
          );
          const option = await select.findElement(
            By.xpath('//option[. = "Guanajuato"]')
          );
          await option.click();
          const select1 = await driver.findElement(By.id("municipio"));
          await select1.click();
          await driver.sleep(2000); // Espera 5 segundos (5000 milisegundos)
          await driver.wait(
            until.elementsLocated(By.css("select#municipio option"))
          );
          const option1 = await select1.findElement(
            By.xpath('//option[. = "Leon"]')
          );
          await option1.click();
          await driver.findElement(By.id("colonia")).sendKeys("Brisas");
          await driver.findElement(By.id("calle")).sendKeys("Lago");
          await driver.findElement(By.id("cp")).sendKeys("37295");
          await driver.findElement(By.id("latitud")).sendKeys("0.0");
          await driver.findElement(By.id("longitud")).sendKeys("0.0");
          const btn = await driver.findElement(By.id("guardar1"));
          await driver.sleep(2000);
          await driver.executeScript("arguments[0].click()", btn);
          currentDate = new Date().toLocaleString();
          await logStream.write(
            `[${currentDate}] User 'admin'  Inserto un Cliente nuevo\n`
          );
          // Esperar a que se cargue la página de Nuevo Cliente
          await driver.sleep(6000);
          try {
            const searchInput = await driver.findElement(By.name("nombre"));
            await searchInput.sendKeys("prueba");
            const searchBtn = await driver.findElement(By.id("search"));
            // Esperar a que se cargue la página de Nuevo Cliente
            await driver.sleep(2000);
            await searchBtn.click();
            currentDate = new Date().toLocaleString();
            await logStream.write(
              `[${currentDate}] User 'admin'  Busco un Cliente\n`
            );
            await driver.sleep(2000);
            // Obtener la primera fila
            const firstRow = await driver.findElement(
              By.css("table tbody tr:first-child")
            );
            // Dentro de la fila, obtener el botón editar
            const editarBtn = await firstRow.findElement(
              By.css("button.btn-primary")
            );
            // Hacer clic en el botón eliminar
            await editarBtn.click();
            currentDate = new Date().toLocaleString();
            await logStream.write(
              `[${currentDate}] User 'admin'  Accedio a editar un Cliente\n`
            );
            await driver.sleep(2000);
            try {
              await driver.findElement(By.id("nombre")).sendKeys("1");
              await driver.findElement(By.id("telefono")).sendKeys("1");
              const select2 = await driver.findElement(By.id("estado"));
              await select2.click();
              await driver.sleep(2000); // Espera 5 segundos (5000 milisegundos)
              await driver.wait(
                until.elementsLocated(By.css("select#estado option"))
              );
              const option2 = await select2.findElement(
                By.xpath('//option[. = "Morelos"]')
              );
              await option2.click();
              const select3 = await driver.findElement(By.id("municipio"));
              await select3.click();
              await driver.sleep(2000); // Espera 5 segundos (5000 milisegundos)
              await driver.wait(
                until.elementsLocated(By.css("select#municipio option"))
              );
              const option3 = await select3.findElement(
                By.xpath('//option[. = "Temoac"]')
              );
              await option3.click();
              await driver.findElement(By.id("colonia")).sendKeys("1");
              await driver.findElement(By.id("calle")).sendKeys("1");
              await driver.findElement(By.id("cp")).sendKeys("37000");
              const cpInput = await driver.findElement(By.id("cp"));
              await cpInput.clear();
              await cpInput.sendKeys("37000");
              await driver.findElement(By.id("latitud")).sendKeys("1");
              const latitudInput = await driver.findElement(By.id("latitud"));
              await latitudInput.clear();
              await latitudInput.sendKeys("1.1");
              await driver.findElement(By.id("longitud")).sendKeys("1");
              const longitudInput = await driver.findElement(By.id("longitud"));
              await longitudInput.clear();
              await longitudInput.sendKeys("1.1");
              const btn1 = await driver.findElement(By.id("guardar1"));
              await driver.sleep(2000);
              await driver.executeScript("arguments[0].click()", btn1);
              currentDate = new Date().toLocaleString();
              await logStream.write(
                `[${currentDate}] User 'admin'  Modifico un Cliente\n`
              );
              // Esperar a que se cargue la página con el Cliente Modificado
              await driver.sleep(6000);
            } catch (err) {
              await logStream.write(
                `[${currentDate}] Error!!!!!! No fue posible editar el Cliente de prueba\n`
              );
            }
            try {
              const searchInput1 = await driver.findElement(By.name("nombre"));
              await searchInput1.sendKeys("prueba1");
              const searchBtn1 = await driver.findElement(By.id("search"));
              await searchBtn1.click();
              currentDate = new Date().toLocaleString();
              await logStream.write(
                `[${currentDate}] User 'admin'  Busco un Cliente\n`
              );
              await driver.sleep(4000);
              // Obtener la primera fila
              try {
                const firstRow1 = await driver.findElement(
                  By.css("table tbody tr:first-child")
                );
                // Dentro de la fila, obtener el botón eliminar
                const eliminarBtn = await firstRow1.findElement(
                  By.css("button.btn-danger")
                );
                // Hacer clic en el botón eliminar
                await eliminarBtn.click();
                currentDate = new Date().toLocaleString();
                await logStream.write(
                  `[${currentDate}] User 'admin'  Elimino un Cliente\n`
                );
              } catch (err) {
                currentDate = new Date().toLocaleString();
                await logStream.write(
                  `[${currentDate}] Error!!!!!! No fue posible eliminar al Cliente de prueba\n`
                );
              }
            } catch (err) {
              currentDate = new Date().toLocaleString();
              await logStream.write(
                `[${currentDate}] Error!!!!!! No fue posible encontrar al Cliente de prueba una vez editado\n`
              );
            }
          } catch (err) {
            currentDate = new Date().toLocaleString();
            await logStream.write(
              `[${currentDate}] Error!!!!!! No fue posible encontrar al Cliente prueba una vez insertado\n`
            );
          }
        } catch (err) {
          currentDate = new Date().toLocaleString();
          await logStream.write(
            `[${currentDate}] Error!!!!!! No fue posible insertar un Cliente de prueba\n`
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
    await driver.sleep(2000);
  } finally {
    // Cerrar el navegador después de las pruebas
    await driver.quit();
  }
}, 120000);
