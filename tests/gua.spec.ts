import { createRequire } from "node:module";
import { expect, test } from "@playwright/test";
import type { SixtyFourGua } from "@freizl/yijing";

const require = createRequire(import.meta.url);
const sixtyFourGuas = require("@freizl/yijing/zh-CN/64gua.json") as SixtyFourGua[];

const guas = sixtyFourGuas as SixtyFourGua[];
const baseRowSelector = "[id='主卦']";
const selector = {
  gua: `${baseRowSelector} .gua`,
  sections: (name: string) => `${baseRowSelector} section[name='${name}'] p`,
};

test.describe("All Gua views render correctly", () => {
  for (const gua of guas) {
    test(`renders ${gua.name} 卦 and its 爻 text`, async ({ page }) => {
      await page.goto("/");
      await page.locator("a.gua-simple", { hasText: gua.name }).first().click();

      await expect(page.locator("h1")).toHaveText(`${gua.name}卦`);
      await expect(page.locator(selector.sections("guaCi"))).toHaveText(gua.gua_ci);
      await expect(page.locator(selector.sections("daXiang"))).toHaveText(
        gua.da_xiang,
      );
      await expect(page.locator(selector.sections("tuanCi"))).toHaveText(gua.tuan_ci);

      const glyphSpans = page.locator(`${selector.gua} span`);
      for (let pageIndex = 0; pageIndex < gua.id.length; pageIndex += 1) {
        const dataIndex = gua.id.length - 1 - pageIndex;
        await glyphSpans.nth(pageIndex).click();

        const yaoText = gua.yao_ci[dataIndex];
        if (yaoText) {
          await expect(page.locator(selector.sections("yaoCi"))).toHaveText(yaoText);
        }

        const xiaoText = gua.xiao_xiang[dataIndex];
        if (xiaoText) {
          await expect(page.locator(selector.sections("xiaoXiang"))).toHaveText(
            xiaoText,
          );
        }
      }

      await page.locator(`${selector.gua} label.name`).click();
      await expect(page.locator(selector.sections("guaCi"))).toHaveText(gua.gua_ci);
    });
  }
});
