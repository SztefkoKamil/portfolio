import puppeteer from 'puppeteer';

describe('navigation menu e2e', () => {
  let browser = null;

  beforeEach(async () => {
    browser = await puppeteer.launch();
  });

  afterEach(async () => {
    await browser.close();
  });

  it('should properly navigate via menu', async () => {
    const page = await browser.newPage();
    await page.goto('http://localhost:8080/');

    let article = await page.$eval('article', (el) =>
      el.classList.contains('intro-container')
    );
    expect(article).toBe(true); // article intro view

    await page.click('.toggle-menu-btn'); // open menu
    await page.waitFor(50); // wait for open menu animation
    let navContainer = await page.$('.nav-container');
    expect(navContainer).toBeTruthy; // nav-container should be opened

    await page.click('#menu-skills-link'); // go to skills view
    await page.waitFor(550); // wait for view switch animation
    navContainer = await page.$('.nav-container');
    article = await page.$eval('article', (el) =>
      el.classList.contains('skills-container')
    );
    expect(navContainer).toBe(null); // nav-container should be closed
    expect(article).toBe(true); // article skills view
  });
});
