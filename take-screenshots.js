const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const OUT = path.join(__dirname, 'public', 'screenshots');
fs.mkdirSync(OUT, { recursive: true });

const ESTABLISHMENT_ID = '8b83410c-f149-4a3b-9e87-bbe342937127';
const TOURNAMENT_ID = '8b72c572-e947-4c6e-8715-37c824033be4';

async function screenshot(page, url, name, opts = {}) {
  const { width = 1280, height = 800, fullPage = false, waitFor = 3000 } = opts;
  await page.setViewportSize({ width, height });
  await page.goto(url, { waitUntil: 'networkidle', timeout: 20000 }).catch(() => {});
  await page.waitForTimeout(waitFor);
  const file = path.join(OUT, name);
  await page.screenshot({ path: file, fullPage });
  console.log(`✓ ${name} (${width}x${height})`);
}

(async () => {
  const browser = await chromium.launch({ headless: true });

  // ===== CLIENT APP =====
  const client = await browser.newContext();

  // Client login page (two-column split)
  const cp = await client.newPage();
  await screenshot(cp, 'http://localhost:3000/login', 'client-login-desktop.png', { width: 1440, height: 900 });
  await screenshot(cp, 'http://localhost:3000/login', 'client-login-mobile.png', { width: 390, height: 844, waitFor: 2000 });

  // Client establishment page
  await screenshot(cp, `http://localhost:3000/${ESTABLISHMENT_ID}`, 'client-establishment-desktop.png', { width: 1440, height: 900, waitFor: 5000 });
  await screenshot(cp, `http://localhost:3000/${ESTABLISHMENT_ID}`, 'client-establishment-mobile.png', { width: 390, height: 844, waitFor: 5000 });

  // Client tournament page
  await screenshot(cp, `http://localhost:3000/torneos/${TOURNAMENT_ID}`, 'client-tournament-desktop.png', { width: 1440, height: 900, waitFor: 5000 });
  await screenshot(cp, `http://localhost:3000/torneos/${TOURNAMENT_ID}`, 'client-tournament-mobile.png', { width: 390, height: 844, waitFor: 5000 });

  // Client terms page
  await screenshot(cp, 'http://localhost:3000/terms', 'client-terms-desktop.png', { width: 1440, height: 900, waitFor: 3000 });

  await cp.close();

  // ===== MANAGER APP =====
  const mgr = await browser.newContext();

  // Manager login page (two-column green split)
  const mp = await mgr.newPage();
  await screenshot(mp, 'http://localhost:3001/login', 'manager-login-desktop.png', { width: 1440, height: 900 });
  await screenshot(mp, 'http://localhost:3001/login', 'manager-login-mobile.png', { width: 390, height: 844, waitFor: 2000 });

  // Manager admin login
  await screenshot(mp, 'http://localhost:3001/admin/login', 'manager-admin-login-desktop.png', { width: 1440, height: 900 });
  await screenshot(mp, 'http://localhost:3001/admin/login', 'manager-admin-login-mobile.png', { width: 390, height: 844, waitFor: 2000 });

  // Manager terms
  await screenshot(mp, 'http://localhost:3001/terms', 'manager-terms-desktop.png', { width: 1440, height: 900 });

  await mp.close();
  await mgr.close();

  await browser.close();
  console.log('\nAll screenshots saved to', OUT);
})();
