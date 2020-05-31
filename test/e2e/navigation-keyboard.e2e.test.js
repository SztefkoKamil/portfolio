import puppeteer from 'puppeteer';

describe('navigation keyboard e2e', () => {
  let browser = null;

  beforeEach(async () => {
    browser = await puppeteer.launch();
  });

  afterEach(async () => {
    await browser.close();
  });

  it('should properly navigate via keyboard arrows keys', async () => {
    const page = await browser.newPage();
    await page.goto('http://localhost:8080/');

    let article = await page.$eval('article', (el) =>
      el.classList.contains('intro-container')
    );
    expect(article).toBe(true); // article intro view

    await page.keyboard.press('ArrowRight'); // click right arrow key
    await page.waitFor(100); // wait not enough for spamClickBlocker
    await page.keyboard.press('ArrowRight'); // to fast click should not switch view
    await page.waitFor(650); // wait for view switch animation & spamClickBlocker
    article = await page.$eval('article', (el) =>
      el.classList.contains('about-container')
    );
    expect(article).toBe(true); // article skills view

    await page.keyboard.press('ArrowLeft'); // click left arrow key
    await page.waitFor(550); // wait for view switch animation
    article = await page.$eval('article', (el) =>
      el.classList.contains('intro-container')
    );
    expect(article).toBe(true); // article skills view
  });
});
