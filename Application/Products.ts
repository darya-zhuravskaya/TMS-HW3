import fetch from "node-fetch"
import Product from "./Product"
import { Rating } from "./Rating";

function compare(a:number, b:number){
    if (a < b){
        return -1
    }
    else if (a = b){
        return 0
    }
    else return 1
}

function compareProducts(a:Product, b:Product): number{
    return compare(a.rate.rate, b.rate.rate)
}



export class Products {
    products:Product[];
    

    constructor(){
        this.products = []
    
    }

    get Products(){
        return this.products
    }

    async init(){
        let response = await fetch("https://fakestoreapi.com/products/")
        let responsjson = await response.json() as any[]
        for (let data of responsjson){
            let rate = new Rating(data.rating.rate, data.rating.count)
            let product1 = new Product(data.id, data.title, data.price, data.description, data.category, data.image, rate)
            this.products.push(product1)
        }

    }

    findProductTitle(title:string): Product | undefined{
        return this.products.find((product) => product.title === title)
    }

    findProductDescription(description:string): Product[] {
        return this.products.filter((product) => product.description.includes(description))
    }

    findProductPrice(from:number, to:number): Product[] {
       
        return this.products.filter((product) => product.price >= from && product.price <= to)
    }

    sortProducts(){
        this.products.sort(compareProducts)
    }

   
    filterByImageFormat(formats: string[]) {
        return this.products.filter(product => {
            const format = product.image.split(".").at(-1) as string
            return !formats.includes(format)
        })
    }

    shortDescription(){
         this.products.forEach((product)=> product.shortenDescription())
    }

}
