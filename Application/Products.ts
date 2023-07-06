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

    filterByRate(rate:number){
       return this.products.filter((product)=> product.rate.rate >= rate).sort((a,b)=>{
            return compare(a.rate.count, b.rate.count)
        }).reverse()
    }

    discountForCategory(discount:number, category:string){
        this.products.filter((product)=> product.category === category).forEach((product)=> product.price = product.price - product.price * discount/100)
    }

    roundPrice(){
        this.products.forEach((product)=> product.price = Math.round(product.price))
    }

    OverallCount(){
        let sum = 0
        for (let product of this.products){
            sum = sum + product.rate.count
        }
        return sum
    }

    groupByCategory() {
        this.products.sort((a,b)=> {
            return compare(a.price, b.price)
        })
        let map = new Map<string, Product[]>()
        for (let product of this.products){
            if (map.get(product.category) === undefined){
                map.set(product.category, [product])
            } else{
                map.get(product.category)?.push(product)
            }
        }
        return map
    }

}
