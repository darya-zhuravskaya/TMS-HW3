import { Builder, By, WebDriver, until } from "selenium-webdriver"

import { BasePage } from "../pages/base.page"
import { MainPage } from "../pages/main.page";
import { ProductPage } from "../pages/product.page";


describe("Main Page", () => {
    let page: MainPage;

    beforeEach(async () => {
        page = new MainPage();
        await page.init();
        await page.open();
    });

    afterEach(async () => {
        await page.close();
    });

    test("When search returns some products", async () => {
        let link = await page.link('Каталог')

        expect(link).toBeTruthy();
        expect(await link.isDisplayed()).toBe(true);

        link = await page.link('Новости')

        expect(link).toBeTruthy();
        expect(await link.isDisplayed()).toBe(true);

        link = await page.link('Автобарахолка')

        expect(link).toBeTruthy();
        expect(await link.isDisplayed()).toBe(true);

        link = await page.link('Дома и квартиры')

        expect(link).toBeTruthy();
        expect(await link.isDisplayed()).toBe(true);

        link = await page.link('Услуги')

        expect(link).toBeTruthy();
        expect(await link.isDisplayed()).toBe(true);

        link = await page.link('Барахолка')

        expect(link).toBeTruthy();
        expect(await link.isDisplayed()).toBe(true);

        link = await page.link('Форум')

        expect(link).toBeTruthy();
        expect(await link.isDisplayed()).toBe(true);
    })

    test("When search returns some products", async () => {
        await page.search("iphone 14");
        expect((await page.searchResults()).length).toBeGreaterThan(0)

    })

    test("When search does not return any products", async () => {
        await page.search("asdfghfdsdfgf");
        expect((await page.searchResults()).length).toBe(0)

    })

})

describe("Product Page", () => {
    let page: ProductPage;

    beforeEach(async () => {
        page = new ProductPage("https://catalog.onliner.by/mobile/apple/iphone14pm");
        await page.init();
        await page.open();
    });

    afterEach(async () => {
        await page.close();
    });

    test("Add product to a carts", async () => {
        await page.addToCart();

        let button = await page.goToCartButton()
        expect(await button.isDisplayed()).toBeTruthy()
    })

    test("Check cart icon on the main page", async () => {
        await page.addToCart();

        let mainPage = new MainPage(page.driver)
        await mainPage.open()
        let cart = await mainPage.cartIcon()
        expect(await cart.isDisplayed()).toBeTruthy();
        expect(await cart.getText()).toBe("1")
    })
});
