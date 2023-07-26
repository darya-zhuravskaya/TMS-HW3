import { WebDriver, Builder } from "selenium-webdriver";

export class BasePage {
    protected readonly url: string;
    public readonly driver: WebDriver;

    constructor(url: string, driver: WebDriver | undefined = undefined){
        this.url = url
        this.driver = driver || new Builder().forBrowser("chrome").build();
    }

    async init() {
        return this.driver.manage().window().maximize();
    }

    async open() {
        return this.driver.get(this.url)
    }

    async close() {
        return this.driver.quit()
    }
}