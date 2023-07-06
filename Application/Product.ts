import { Rating } from "./Rating";
export default class Product{
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rate: Rating

    constructor(id:number, title:string, price: number, description: string, category: string, image:string, rate:Rating){
        this.id = id;
        this.title = title;
        this.price = price;
        this.description = description;
        this.category = category;
        this.image = image;
        this.rate = rate
    }

    shortenDescription(){
        if (this.description.length <= 27) return
        this.description = `${this.description.slice(0,27)}...`
    }

}
