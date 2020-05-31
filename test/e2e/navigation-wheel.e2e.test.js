import puppeteer from 'puppeteer';

describe('navigation wheel e2e', () => {
  let browser = null;

  beforeEach(async () => {
    browser = await puppeteer.launch();
  });

  afterEach(async () => {
    await browser.close();
  });

  it('should properly navigate via wheel spin', async () => {
    const page = await browser.newPage();
    await page.goto('http://localhost:8080/');

    let article = await page.$eval('article', (el) =>
      el.classList.contains('intro-container')
    );
    expect(article).toBe(true); // article intro view

    await page.evaluate(() => {
      const wheel = new WheelEvent('wheel', { deltaY: 100 });
      window.dispatchEvent(wheel); // spin wheel down
    });
    await page.waitFor(750); // wait for view switch animation
    article = await page.$eval('article', (el) =>
      el.classList.contains('about-container')
    );
    expect(article).toBe(true); // article skills view

    await page.evaluate(() => {
      const wheel = new WheelEvent('wheel', { deltaY: -100 });
      window.dispatchEvent(wheel); // spin wheel up
    });
    await page.waitFor(550); // wait for view switch animation
    article = await page.$eval('article', (el) =>
      el.classList.contains('intro-container')
    );
    expect(article).toBe(true); // article skills view
  });
});
