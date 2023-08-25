import { By, until } from "selenium-webdriver";
import { BasePage } from "./base.page";

export class ProductPage extends BasePage {

    async addToCart() {
        await this.driver.wait(until.elementLocated(By.linkText('В корзину')))

        let buttonBasket = this.driver.findElement(By.linkText('В корзину'));
        await this.driver.wait(until.elementIsVisible(buttonBasket));

        await buttonBasket.click();

        return this.driver.wait(until.elementLocated(By.linkText('В корзине')))
    }

    async goToCartButton(){
        return this.driver.findElement(By.linkText('В корзине'));
    }
}