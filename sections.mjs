import { chromium } from 'playwright';
const BASE = 'http://localhost:7700';
const browser = await chromium.launch();

const page = await browser.newPage({ viewport: { width: 375, height: 812 } });
await page.goto(`${BASE}/Home.dc.html`, { waitUntil: 'networkidle', timeout: 30000 });
await page.waitForTimeout(2000);

// Total page height
const totalH = await page.evaluate(() => document.body.scrollHeight);
console.log('Total height:', totalH);

// Take 6 viewport-sized slices
const slices = 6;
for (let i = 0; i < slices; i++) {
  const scrollY = Math.floor(totalH / slices) * i;
  await page.evaluate(y => window.scrollTo(0, y), scrollY);
  await page.waitForTimeout(300);
  await page.screenshot({ path: `/tmp/home_slice${i}.png` });
  console.log(`SLICE ${i} at scrollY=${scrollY}`);
}
await page.close();

// Also do Consultoria Individual
const page2 = await browser.newPage({ viewport: { width: 375, height: 812 } });
await page2.goto(`${BASE}/Consultoria%20Individual.dc.html`, { waitUntil: 'networkidle', timeout: 30000 });
await page2.waitForTimeout(2000);
const totalH2 = await page2.evaluate(() => document.body.scrollHeight);
console.log('ConsInd height:', totalH2);
for (let i = 0; i < 4; i++) {
  const scrollY = Math.floor(totalH2 / 4) * i;
  await page2.evaluate(y => window.scrollTo(0, y), scrollY);
  await page2.waitForTimeout(300);
  await page2.screenshot({ path: `/tmp/consind_slice${i}.png` });
  console.log(`ConsInd SLICE ${i} at scrollY=${scrollY}`);
}
await page2.close();

await browser.close();
