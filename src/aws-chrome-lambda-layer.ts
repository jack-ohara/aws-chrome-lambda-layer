import chromium from "@sparticuz/chrome-aws-lambda";

export async function getPage(url: string) {
  let browser: Awaited<
    ReturnType<(typeof chromium)["puppeteer"]["launch"]>
  > | null;
  let page: Awaited<
    ReturnType<
      Awaited<ReturnType<(typeof chromium)["puppeteer"]["launch"]>>["newPage"]
    >
  >;

  try {
    browser = await chromium.puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath,
      headless: chromium.headless,
      ignoreHTTPSErrors: true,
    });
    let page = await browser.newPage();
    await page.goto(url, { waitUntil: "networkidle0" });

    return page;
  } catch (error) {
    console.log("Warning:" + error);
    console.log("Resetting browser context");
    try {
      page!.browser().close();
    } catch {}
  } finally {
    browser = null;
    return;
  }
}
