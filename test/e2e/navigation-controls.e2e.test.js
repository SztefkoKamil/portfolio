import puppeteer from 'puppeteer';

describe('navigation controls e2e', () => {
  let browser = null;

  beforeEach(async () => {
    browser = await puppeteer.launch();
  });

  afterEach(async () => {
    await browser.close();
  });

  it('should properly navigate via controls arrows', async () => {
    const page = await browser.newPage();
    await page.goto('http://localhost:8080/');

    let article = await page.$eval('article', (el) =>
      el.classList.contains('intro-container')
    );
    expect(article).toBe(true); // article intro view

    await page.click('#nav-left-arrow'); // click left arrow
    await page.waitFor(100); // wait not enough for spamClickBlocker
    await page.click('#nav-left-arrow'); // to fast click should not switch view
    await page.waitFor(650); // wait for view switch animation & spamClickBlocker
    article = await page.$eval('article', (el) =>
      el.classList.contains('contact-container')
    );
    expect(article).toBe(true); // article skills view

    await page.click('#nav-right-arrow'); // click right arrow
    await page.waitFor(750); // wait for view switch animation & spamClickBlocker
    await page.click('#nav-right-arrow'); // click right arrow
    await page.waitFor(550); // wait for view switch animation
    article = await page.$eval('article', (el) =>
      el.classList.contains('about-container')
    );
    expect(article).toBe(true); // article skills view
  });
});
