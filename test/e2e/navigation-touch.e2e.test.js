import puppeteer from 'puppeteer';

describe('navigation touch e2e', () => {
  let browser = null;

  beforeEach(async () => {
    browser = await puppeteer.launch({ hasTouch: true });
  });

  afterEach(async () => {
    await browser.close();
  });

  it('should properly navigate via touchscreen', async () => {
    const page = await browser.newPage();
    await page.goto('http://localhost:8080/');

    let article = await page.$eval('article', (el) =>
      el.classList.contains('intro-container')
    );
    expect(article).toBe(true); // article intro view

    // simulate touch slide form right to left
    await page.evaluate(() => {
      const startX = 500;
      const startY = 500;
      const endX = 300;
      const endY = 500;
      const target = document.querySelector('nav.controls-container');

      const touchstart = new Touch({
        identifier: Date.now(),
        target,
        pageX: startX,
        pageY: startY,
        screenX: startX,
        screenY: startY,
        clientX: startX,
        clientY: startY
      });

      const touchend = new Touch({
        identifier: Date.now(),
        target,
        pageX: endX,
        pageY: endY,
        screenX: endX,
        screenY: endY,
        clientX: endX,
        clientY: endY
      });

      const touchStartEvent = new TouchEvent('touchstart', {
        cancelable: true,
        bubbles: true,
        touches: [touchstart],
        targetTouches: [touchstart],
        changedTouches: [touchstart]
      });

      target.dispatchEvent(touchStartEvent);

      const touchEndEvent = new TouchEvent('touchend', {
        cancelable: true,
        bubbles: true,
        touches: [touchend],
        changedTouches: [touchend]
      });

      target.dispatchEvent(touchEndEvent);
    });

    await page.waitFor(750); // wait for view switch animation
    article = await page.$eval('article', (el) =>
      el.classList.contains('about-container')
    );
    expect(article).toBe(true); // article about view

    // simulate touch slide form left to right
    await page.evaluate(() => {
      const startX = 300;
      const startY = 500;
      const endX = 500;
      const endY = 500;
      const target = document.querySelector('nav.controls-container');

      const touchstart = new Touch({
        identifier: Date.now(),
        target,
        pageX: startX,
        pageY: startY,
        screenX: startX,
        screenY: startY,
        clientX: startX,
        clientY: startY
      });

      const touchend = new Touch({
        identifier: Date.now(),
        target,
        pageX: endX,
        pageY: endY,
        screenX: endX,
        screenY: endY,
        clientX: endX,
        clientY: endY
      });

      const touchStartEvent = new TouchEvent('touchstart', {
        cancelable: true,
        bubbles: true,
        touches: [touchstart],
        targetTouches: [touchstart],
        changedTouches: [touchstart]
      });

      target.dispatchEvent(touchStartEvent);

      const touchEndEvent = new TouchEvent('touchend', {
        cancelable: true,
        bubbles: true,
        touches: [touchend],
        changedTouches: [touchend]
      });

      target.dispatchEvent(touchEndEvent);
    });

    await page.waitFor(550); // wait for view switch animation
    article = await page.$eval('article', (el) =>
      el.classList.contains('intro-container')
    );
    expect(article).toBe(true); // article intro view
  });
});
