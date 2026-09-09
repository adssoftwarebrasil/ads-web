import { test, expect } from '@playwright/test';

const sizes = [
  [320, 740], [390, 844], [768, 1024], [1024, 768],
  [1366, 768], [1440, 900], [1536, 864], [2560, 1080],
];

for (const [width, height] of sizes) {
  test(`Build renderiza sem erros ou overflow em ${width}x${height}`, async ({ page }, testInfo) => {
    await page.setViewportSize({ width, height });
    const errors = [];
    page.on('pageerror', (error) => errors.push(error.message));
    page.on('console', (message) => { if (message.type() === 'error') errors.push(message.text()); });
    page.on('response', (response) => { if (response.status() >= 400) errors.push(`${response.status()} ${response.url()}`); });
    await page.goto('/');
    await page.evaluate(() => document.fonts.ready);
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Confiança para');

    for (const section of ['#servicos', '#a-taiti', '#contato', '.footer']) {
      await page.locator(section).scrollIntoViewIfNeeded();
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    }

    const images = page.locator('img');
    await expect(images).toHaveCount(3);
    for (const img of await images.all()) {
      await expect(img).toBeVisible();
      expect(await img.evaluate((node) => node.complete && node.naturalWidth > 0)).toBe(true);
      expect(await img.getAttribute('alt')).toBeTruthy();
    }
    const invalidAnchors = await page.locator('a[href^="#"]').evaluateAll((links) => links.filter((link) => !link.hash || !document.getElementById(decodeURIComponent(link.hash.slice(1)))).map((link) => link.outerHTML));
    expect(invalidAnchors).toEqual([]);
    expect(errors).toEqual([]);

    await page.evaluate(() => window.scrollTo(0, 0));
    if (width === 1366) {
      const heroBottom = await page.locator('.hero-actions').evaluate((node) => node.getBoundingClientRect().bottom);
      expect(heroBottom).toBeLessThan(height);
    }
    if ([390, 1366].includes(width)) {
      await page.screenshot({ path: testInfo.outputPath(`pagina-${width}.png`), fullPage: true });
    }
  });
}

test('Menu mobile navega e fecha com Escape', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  const toggle = page.getByRole('button', { name: 'Abrir menu' });
  await toggle.click();
  await expect(page.getByRole('button', { name: 'Fechar menu' })).toHaveAttribute('aria-expanded', 'true');
  await page.getByRole('navigation').getByRole('link', { name: 'Nossos serviços' }).click();
  await expect(page).toHaveURL(/#servicos$/);
  await expect(page.getByRole('navigation')).toBeHidden();
  await page.getByRole('button', { name: 'Abrir menu' }).click();
  await page.keyboard.press('Escape');
  await expect(page.getByRole('button', { name: 'Abrir menu' })).toBeFocused();
  await expect(page.getByRole('navigation')).toBeHidden();
});

for (const width of [390, 1366]) {
  test(`Detalhes acessíveis e WhatsApp contextual em ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 844 });
    await page.goto('/');
    const cards = page.locator('.service-card');
    await expect(cards).toHaveCount(6);
    for (const card of await cards.all()) {
      await card.click();
      const dialog = page.getByRole('dialog');
      await expect(dialog).toBeVisible();
      const link = dialog.getByRole('link', { name: /Consultar pelo WhatsApp/ });
      const href = new URL(await link.getAttribute('href'));
      expect(href.hostname).toBe('wa.me');
      expect(href.pathname).toBe('/5565992622844');
      const name = await dialog.locator('h2').textContent();
      expect(href.searchParams.get('text')).toContain(name.toLocaleLowerCase('pt-BR'));
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
      await page.keyboard.press('Escape');
      await expect(dialog).toHaveCount(0);
      await expect(card).toBeFocused();
    }
    await cards.first().click();
    await page.getByRole('button', { name: 'Fechar detalhes do serviço' }).click();
    await expect(page.getByRole('dialog')).toHaveCount(0);
  });
}

test('Contatos, navegação por teclado e movimento reduzido', async ({ page }) => {
  await page.goto('/');
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: 'Pular para o conteúdo' })).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL(/#conteudo$/);
  for (const anchor of await page.locator('a[href*="wa.me"]').all()) {
    const url = new URL(await anchor.getAttribute('href'));
    expect(url.pathname).toBe('/5565992622844');
    expect(url.searchParams.get('text')).toContain('Taiti Pneus');
  }
  await expect(page.locator('a[href="tel:+5565992622844"]')).toHaveCount(2);
  const mapUrl = new URL(await page.getByRole('link', { name: 'Traçar minha rota' }).getAttribute('href'));
  expect(mapUrl.searchParams.get('query')).toContain('Mendonça, 280');
  await page.getByText('Contatos por e-mail').click();
  await expect(page.locator('a[href^="mailto:"]')).toHaveCount(3);
  for (const link of await page.locator('a[href^="mailto:"]').all()) await expect(link).toBeVisible();
  expect(await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior)).toBe('auto');
});
