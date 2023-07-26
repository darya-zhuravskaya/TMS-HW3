import { Builder, By, WebDriver, until } from "selenium-webdriver"


let driver: WebDriver;

async function checkLinkPresence(text: string) {
    let button = await driver.findElement(By.linkText(text));
    expect(button).toBeTruthy()
    expect(await button.isDisplayed()).toBe(true);

}

describe("Test suite", () => {
    beforeEach(async () => {
        driver = await new Builder().forBrowser("chrome").build();
        await driver.manage().window().maximize();
    });

    afterEach(async () => {
        await driver.quit();
    });

    test("When search returns some products", async () => {
        let driver: WebDriver = await new Builder().forBrowser("chrome").build();
        await driver.manage().window().maximize();
        await driver.get("https://www.onliner.by/");
        let searchField = driver.findElement(By.xpath('//div[@id="fast-search"]/form/input[@name="query"]'));
        await driver.wait(until.elementIsVisible(searchField));
        searchField.sendKeys("iphone 14");

        let searchFrame = driver.findElement(By.xpath('//div[@id="fast-search-modal"]//iframe'));
        await driver.switchTo().frame(searchFrame);

        let resultList = driver.findElement(By.xpath('//ul[@class="search__results"]'));
        await driver.wait(until.elementIsVisible(resultList))

        let results = await resultList.findElements(By.xpath("./li"))
        expect(results.length).toBeGreaterThan(0);

        await driver.quit()
    })

    test("When search does not return any products", async () => {
        let driver: WebDriver = await new Builder().forBrowser("chrome").build();
        await driver.manage().window().maximize();
        await driver.get("https://www.onliner.by/");
        let searchField = driver.findElement(By.xpath('//div[@id="fast-search"]/form/input[@name="query"]'));
        await driver.wait(until.elementIsVisible(searchField));
        searchField.sendKeys("asdfasdfasfasdfasdf");

        let searchFrame = driver.findElement(By.xpath('//div[@id="fast-search-modal"]//iframe'));
        await driver.switchTo().frame(searchFrame);

        await driver.wait(until.elementLocated(By.xpath('//ul[@class="search__results"]')))

        let results = await driver.findElements(By.xpath('//ul[@class="search__results"]/li'))
        expect(results.length).toBe(0);

        await driver.quit()
    })

    test("Add product to a cart", async () => {
        await driver.get("https://catalog.onliner.by/mobile/apple/iphone14pm");

        await driver.wait(until.elementLocated(By.linkText('В корзину')))

        let buttonBasket = driver.findElement(By.linkText('В корзину'));
        await driver.wait(until.elementIsVisible(buttonBasket));

        await buttonBasket.click();

        await driver.wait(until.elementLocated(By.linkText('В корзине')))

        let addedToBasket = driver.findElement(By.linkText('В корзине'));
        expect(await addedToBasket.isDisplayed()).toBe(true);
    })

    test("Check cart icon on the main page", async () => {
        await driver.get("https://catalog.onliner.by/mobile/apple/iphone14pm");

        await driver.wait(until.elementLocated(By.linkText('В корзину')))

        let buttonBasket = driver.findElement(By.linkText('В корзину'));
        await driver.wait(until.elementIsVisible(buttonBasket));

        await buttonBasket.click();

        await driver.wait(until.elementLocated(By.linkText('В корзине')))

        await driver.get("https://catalog.onliner.by");

        await driver.wait(until.elementLocated(By.xpath('//div[@id="userbar"]//div[@class="auth-bar__counter"]')));

        let countProducts = driver.findElement(By.xpath('//div[@id="userbar"]//div[@class="auth-bar__counter"]'));
        await driver.wait(until.elementIsVisible(countProducts));

        expect(await countProducts.isDisplayed()).toBeTruthy();
        expect(await countProducts.getText()).toBe("1")

    })

    test("Check link presence", async () => {

        await driver.get("https://catalog.onliner.by/mobile/apple/iphone14pm");

        await checkLinkPresence("Каталог");
        await checkLinkPresence("Новости");
        await checkLinkPresence("Автобарахолка");
        await checkLinkPresence("Дома и квартиры");
        await checkLinkPresence("Услуги");
        await checkLinkPresence("Барахолка");
        await checkLinkPresence("Форум");
    })
})
