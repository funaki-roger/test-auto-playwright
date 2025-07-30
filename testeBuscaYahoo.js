const { chromium } = require('playwright');

(async () => {
  console.log("🚀 Iniciando teste lento...");

  // Abre o navegador visível com ações lentas
  const browser = await chromium.launch({ headless: false, slowMo: 100 });
  const page = await browser.newPage();

  // Acessa diretamente o Yahoo
  console.log("🌐 Acessando Yahoo...");
  await page.goto('https://www.yahoo.com');
  await page.waitForLoadState('domcontentloaded');

  // Aceita cookies se aparecer
  try {
    const aceitarCookies = await page.$('button:has-text("Aceitar")');
    if (aceitarCookies) {
      await aceitarCookies.click();
      console.log("🍪 Cookies aceitos.");
    }
  } catch (err) {
    console.log("⚠️ Nenhum botão de cookies encontrado.");
  }

  // Aguarda a barra de busca
  await page.waitForSelector('input[name="p"]');

  // Digita "Pacto Soluções" lentamente
  console.log("⌨️ Digitando 'Pacto Soluções' lentamente...");
  const termoBusca = 'Pacto Soluções';
  for (const letra of termoBusca) {
    await page.keyboard.type(letra);
    await page.waitForTimeout(150); // espera 150ms entre cada letra
  }

  // Pressiona Enter
  await page.keyboard.press('Enter');
  console.log("🔎 Busca enviada.");

  // Aguarda os resultados
  await page.waitForSelector('#web');
  const resultados = await page.$$('#web > ol > li');

  if (resultados.length > 0) {
    console.log(`✅ Busca retornou ${resultados.length} resultados.`);
    await page.evaluate(() => {
      alert("Busca lenta por 'Pacto Soluções' realizada com sucesso!");
    });
  } else {
    console.log("❌ Nenhum resultado encontrado.");
  }

  await page.waitForTimeout(3000);
  await browser.close();
  console.log("🧪 Teste lento finalizado.");
})();