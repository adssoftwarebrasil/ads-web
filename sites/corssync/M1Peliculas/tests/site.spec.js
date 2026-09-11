import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const sizes = [
  [320, 740],
  [390, 844],
  [768, 1024],
  [1366, 768],
  [1440, 900],
  [1536, 864],
  [2560, 1080],
];

for (const [width, height] of sizes) {
  test(`imagens e enquadramento em ${width} × ${height}`, async ({ page }) => {
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("console", (message) => {
      if (message.type() === "error") errors.push(message.text());
    });
    page.on("response", (response) => {
      if (response.status() >= 400)
        errors.push(`${response.status()} ${response.url()}`);
    });
    await page.setViewportSize({ width, height });
    await page.goto("/");
    await page.evaluate(() => document.fonts.ready);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    for (const image of await page.locator("img:visible").all()) {
      await image.scrollIntoViewIfNeeded();
      await expect(image).toHaveJSProperty("complete", true);
      expect(
        await image.evaluate((element) => element.naturalWidth),
      ).toBeGreaterThan(0);
    }
    const overflow = await page.evaluate(() => ({
      scroll: document.documentElement.scrollWidth,
      viewport: innerWidth,
    }));
    expect(overflow.scroll).toBeLessThanOrEqual(overflow.viewport);
    const brokenAnchors = await page
      .locator('a[href^="#"]')
      .evaluateAll((links) =>
        links
          .filter(
            (link) =>
              !document.getElementById(link.getAttribute("href").slice(1)),
          )
          .map((link) => link.outerHTML),
      );
    expect(brokenAnchors).toEqual([]);
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
    if (width >= 1000) {
      const quote = await page.locator(".hero-actions .button").boundingBox();
      expect(quote.y + quote.height).toBeLessThan(height);
    }
    expect(errors).toEqual([]);
    if ([390, 1366].includes(width)) {
      await page.screenshot({ path: `qa-results/${width}-inicio.png` });
      await page.screenshot({
        path: `qa-results/${width}-pagina.png`,
        fullPage: true,
      });
    }
  });
}

test("seleção de películas, galeria, teclado e perguntas", async ({ page }) => {
  await page.goto("/");
  const carbonTab = page.getByRole("tab", { name: "Carbono", exact: true });
  await carbonTab.click();
  await expect(carbonTab).toHaveAttribute("aria-selected", "true");
  await expect(page.getByRole("tabpanel")).toContainText("SEU ESTILO.");
  await expect(page.getByRole("tabpanel").getByRole("link")).toHaveAttribute(
    "href",
    /carbono/,
  );
  await carbonTab.press("ArrowRight");
  await expect(
    page.getByRole("tab", { name: "Profissional", exact: true }),
  ).toBeFocused();
  await expect(page.getByRole("tabpanel")).toContainText("UMA BOA ESCOLHA.");
  const firstPhoto = page.getByRole("button", {
    name: "Ampliar foto: BMW na área de instalação da M1 Películas",
  });
  await firstPhoto.click();
  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  await page.getByRole("button", { name: "Próxima foto", exact: true }).click();
  await expect(dialog.locator("img")).toHaveAttribute(
    "alt",
    "Vidros com película em um Jeep Compass",
  );
  await page.keyboard.press("ArrowLeft");
  await expect(dialog.locator("img")).toHaveAttribute(
    "alt",
    "BMW na área de instalação da M1 Películas",
  );
  await page.keyboard.press("Escape");
  await expect(dialog).not.toBeVisible();
  await expect(firstPhoto).toBeFocused();
  const question = page
    .locator("summary")
    .filter({ hasText: "A M1 é aplicadora autorizada 3M?" });
  await question.click();
  await expect(page.locator("details[open]")).toContainText(
    "Sim. A M1 Películas",
  );
});

test("menu mobile e destinos de contato", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.getByRole("button", { name: "Abrir menu" }).click();
  await expect(
    page.getByRole("button", { name: "Fechar menu" }),
  ).toHaveAttribute("aria-expanded", "true");
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Películas", exact: true })
    .click();
  await expect(page).toHaveURL(/#peliculas$/);
  await expect(
    page.getByRole("button", { name: "Abrir menu" }),
  ).toHaveAttribute("aria-expanded", "false");
  await page.getByRole("button", { name: "Abrir menu" }).click();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("button", { name: "Abrir menu" })).toBeFocused();
  for (const href of await page
    .locator('a[href*="wa.me"]')
    .evaluateAll((links) => links.map((link) => link.href))) {
    const url = new URL(href);
    expect(url.pathname).toBe("/5548984397210");
    expect(url.searchParams.get("text")).toContain("Olá!");
  }
  await expect(
    page.getByRole("link", { name: "Como chegar", exact: true }),
  ).toHaveAttribute("href", /google\.com\/maps\/search/);
});

for (const width of [390, 1366]) {
  test(`acessibilidade em ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    expect(
      results.violations.map(({ id, nodes }) => ({
        id,
        nodes: nodes.map((node) => ({
          target: node.target,
          summary: node.failureSummary,
        })),
      })),
    ).toEqual([]);
  });
}
