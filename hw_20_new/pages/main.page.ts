import { By, WebDriver, until } from "selenium-webdriver";
import { BasePage } from "./base.page";

export class MainPage extends BasePage {
    constructor(webdriver: WebDriver | undefined = undefined) {
        super('https://onliner.by', webdriver)
    }

    async link(text: string) {
        return this.driver.findElement(By.linkText(text));
    }

    async search(text:string){
        let searchField = this.driver.findElement(By.xpath('//div[@id="fast-search"]/form/input[@name="query"]'));
        await this.driver.wait(until.elementIsVisible(searchField));
       return  searchField.sendKeys(text);

    }

    async searchResults() {
        let searchFrame = this.driver.findElement(By.xpath('//div[@id="fast-search-modal"]//iframe'));
        await this.driver.switchTo().frame(searchFrame);

        let resultList = this.driver.findElement(By.xpath('//ul[@class="search__results"]'));

        await this.driver.sleep(2000)

        return resultList.findElements(By.xpath("./li"))
    }

    async cartIcon(){
        await this.driver.wait(until.elementLocated(By.xpath('//div[@id="userbar"]//div[@class="auth-bar__counter"]')));

        let countProducts = this.driver.findElement(By.xpath('//div[@id="userbar"]//div[@class="auth-bar__counter"]'));
        return this.driver.wait(until.elementIsVisible(countProducts));

        
    }
}