import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const viewports = [
  [320, 720],
  [375, 812],
  [390, 844],
  [430, 932],
  [768, 1024],
  [1024, 768],
  [1366, 768],
  [1440, 900],
  [1536, 864],
  [1920, 1080],
  [2560, 1440],
];

test('os 12 materiais do cliente aparecem no site e somente a sobremesa usa foto ilustrativa', async ({
  page,
}) => {
  await page.goto('/');
  const sources = await page
    .locator('main img, .brand__logo')
    .evaluateAll((images) => images.map((image) => image.getAttribute('src')));
  for (const name of [
    'logo-sr-burgone',
    'hamburguer-da-casa',
    'hamburguer-duplo',
    'bebida-cremosa',
    'arte-geleia',
    'ambiente-da-casa',
    'lanche-queijo',
    'saches-acompanhamentos',
    'lanche-aberto',
    'lanche-no-prato',
    'arte-sr-burgone',
    'espaco-infantil',
  ]) {
    expect(sources.some((source) => source.includes(name))).toBe(true);
  }
  await expect(page.locator('.hero__image')).toHaveAttribute('alt', /Sr Burgone/);
  await expect(page.locator('.hero .photo-credit')).not.toContainText('ilustrativa');
  await expect(page.locator('.product-card .photo-credit')).toHaveCount(1);
  await expect(page.locator('link[rel="icon"]')).toHaveAttribute('href', '/favicon.png');
});

for (const width of [390, 1366]) {
  test(`galeria: navegação, imagem inteira, foco e acessibilidade em ${width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/');
    const opener = page.getByRole('button', { name: 'Ampliar imagem: Capricho em cada camada' });
    await opener.click();
    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible();
    await expect(page.locator('.photo-dialog__image')).toHaveCSS('object-fit', 'contain');
    await expect(page.getByRole('button', { name: 'Fechar imagem ampliada' })).toBeFocused();
    await page.keyboard.press('ArrowLeft');
    await expect(page.locator('#photo-dialog-title')).toHaveText('A cara da Sr Burgone');
    await expect(page.locator('#photo-dialog-description')).toContainText('5 de setembro de 2024');
    await expect(page.locator('.photo-dialog__image')).toHaveJSProperty('complete', true);
    await page.keyboard.press('ArrowRight');
    await expect(page.locator('#photo-dialog-title')).toHaveText('Capricho em cada camada');
    await page.getByRole('button', { name: 'Próxima imagem' }).click();
    await expect(page.locator('#photo-dialog-title')).toHaveText('Sabor por todos os lados');
    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .analyze();
    expect(
      results.violations.map(({ id, nodes }) => ({
        id,
        targets: nodes.map((node) => node.target),
      })),
    ).toEqual([]);
    await page.keyboard.press('Escape');
    await expect(dialog).toBeHidden();
    await expect(opener).toBeFocused();
    await expect(page.locator('body')).not.toHaveCSS('overflow', 'hidden');
    await opener.click();
    await page.getByRole('button', { name: 'Fechar imagem ampliada' }).click();
    await expect(dialog).toBeHidden();
  });
}

for (const [width, height] of viewports) {
  test(`layout, assets e console: ${width}x${height}`, async ({ page }, testInfo) => {
    const errors = [];
    const failedResources = [];
    const remoteResources = [];
    page.on('pageerror', (error) => errors.push(error.message));
    page.on('console', (message) => {
      if (message.type() === 'error' || message.type() === 'warning') errors.push(message.text());
    });
    page.on('response', (response) => {
      if (response.status() >= 400) failedResources.push(response.url());
    });
    page.on('requestfailed', (request) => failedResources.push(request.url()));
    page.on('request', (request) => {
      if (!request.url().startsWith('http://127.0.0.1:4178') && !request.url().startsWith('data:'))
        remoteResources.push(request.url());
    });
    await page.setViewportSize({ width, height });
    await page.goto('/');
    await page.evaluate(() => document.fonts.ready);
    await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1);
    await expect(page).toHaveTitle(/Sr Burgone/);
    for (const image of await page.locator('img').all()) {
      await image.scrollIntoViewIfNeeded();
      await expect(image).toHaveJSProperty('complete', true);
      expect(await image.evaluate((element) => element.naturalWidth)).toBeGreaterThan(0);
    }
    for (const section of await page.locator('section').all())
      await section.scrollIntoViewIfNeeded();
    await expect(page.locator('.reveal--waiting')).toHaveCount(0);
    const overflow = await page.evaluate(() => ({
      window: window.innerWidth,
      page: document.documentElement.scrollWidth,
    }));
    expect(overflow.page).toBeLessThanOrEqual(overflow.window);
    await page.evaluate(() => window.scrollTo(0, 0));
    if (width >= 1000) {
      const order = await page.locator('.hero__actions').boundingBox();
      expect(order.y + order.height).toBeLessThan(height);
    }
    await page.screenshot({ path: testInfo.outputPath(`viewport-${width}.png`), fullPage: true });
    if (width === 1366 || width === 390)
      await page.screenshot({ path: testInfo.outputPath(`first-fold-${width}.png`) });
    expect(errors).toEqual([]);
    expect(failedResources).toEqual([]);
    expect(remoteResources).toEqual([]);
  });
}

test('filtros mostram as categorias corretas e restauram os produtos', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('.product-card')).toHaveCount(4);
  await page.getByRole('button', { name: 'Hambúrgueres & x-saladas' }).click();
  await expect(page.locator('.product-card')).toHaveCount(2);
  await expect(page.getByRole('heading', { name: 'X-saladas', exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'Sucos & cremes' }).click();
  await expect(page.locator('.product-card')).toHaveCount(1);
  await expect(page.getByRole('heading', { name: 'Sucos & cremes', exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'Sobremesas', exact: true }).click();
  await expect(page.locator('.product-card')).toHaveCount(1);
  await page.getByRole('button', { name: 'De tudo um pouco' }).click();
  await expect(page.locator('.product-card')).toHaveCount(4);
  await expect(page.getByRole('button', { name: 'De tudo um pouco' })).toHaveAttribute(
    'aria-pressed',
    'true',
  );
});

test('menu mobile: abrir, Escape, navegação, clique externo e resize', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  await page.getByRole('button', { name: 'Abrir menu' }).click();
  await expect(page.getByRole('navigation', { name: 'Navegação mobile' })).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(page.getByRole('button', { name: 'Abrir menu' })).toBeFocused();
  await expect(page.locator('#mobile-menu')).toBeHidden();
  await page.getByRole('button', { name: 'Abrir menu' }).click();
  await page.locator('#mobile-menu').getByRole('link', { name: 'Nossos sabores' }).click();
  await expect(page).toHaveURL(/#sabores$/);
  await expect(page.locator('#mobile-menu')).toBeHidden();
  await page.getByRole('button', { name: 'Abrir menu' }).click();
  await page.locator('.flavors').click({ position: { x: 10, y: 500 } });
  await expect(page.locator('#mobile-menu')).toBeHidden();
  await page.getByRole('button', { name: 'Abrir menu' }).click();
  await page.setViewportSize({ width: 1366, height: 768 });
  await expect(page.locator('#mobile-menu')).toBeHidden();
});

test('FAQ e atalho de teclado funcionam', async ({ page }) => {
  await page.goto('/');
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: 'Pular para o conteúdo' })).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.locator('main')).toBeFocused();
  const question = page.locator('summary').first();
  await question.focus();
  await page.keyboard.press('Enter');
  await expect(page.locator('details').first()).toHaveAttribute('open', '');
  await expect(page.locator('details').first().locator('p')).toBeVisible();
  await page.keyboard.press('Enter');
  await expect(page.locator('details').first()).not.toHaveAttribute('open', '');
});

test('links internos e contatos usam dados reais e mensagens válidas', async ({ page }) => {
  await page.goto('/');
  const links = await page
    .locator('a')
    .evaluateAll((elements) => elements.map((element) => element.getAttribute('href')));
  expect(links).not.toContain('#');
  for (const href of links) {
    if (href.startsWith('#')) await expect(page.locator(href)).toHaveCount(1);
    if (href.includes('wa.me')) {
      const url = new URL(href);
      expect(url.pathname).toBe('/5562991573853');
      expect(url.searchParams.get('text')).toContain('Sr Burgone');
    }
  }
  expect(links).toContain('tel:+5562991573853');
  expect(links).toContain('mailto:Trabalhojackson.impactovisual@gmail.com');
  expect(links).toContain('https://www.instagram.com/srburgone/');
  const newTabLinks = await page
    .locator('a[target="_blank"]')
    .evaluateAll((elements) => elements.map((element) => element.rel));
  expect(newTabLinks.every((rel) => rel.includes('noopener') && rel.includes('noreferrer'))).toBe(
    true,
  );
});

for (const width of [390, 1366]) {
  test(`acessibilidade WCAG A/AA em ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/');
    await page.evaluate(() => document.fonts.ready);
    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .analyze();
    expect(
      results.violations.map(({ id, nodes }) => ({
        id,
        issues: nodes.map(({ target, failureSummary }) => ({ target, failureSummary })),
      })),
    ).toEqual([]);
    if (width === 390) {
      await page.getByRole('button', { name: 'Abrir menu' }).click();
      const menuResults = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
        .analyze();
      expect(
        menuResults.violations.map(({ id, nodes }) => ({
          id,
          issues: nodes.map(({ target, failureSummary }) => ({ target, failureSummary })),
        })),
      ).toEqual([]);
    }
  });
}

test('conteúdo aparece com animações normais e respeita movimento reduzido', async ({ page }) => {
  await page.setViewportSize({ width: 1366, height: 768 });
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.goto('/');
  for (const element of await page.locator('.reveal').all()) {
    await element.scrollIntoViewIfNeeded();
    await expect(element).toHaveCSS('opacity', '1');
  }
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.reload();
  await expect(page.locator('.reveal--waiting')).toHaveCount(0);
  for (const element of await page.locator('.reveal').all()) {
    await expect(element).toHaveCSS('opacity', '1');
    await expect(element).toHaveCSS('transition-duration', '0s');
  }
});
