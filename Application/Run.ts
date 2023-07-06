import { write } from "node:fs";
import Product from "./Product";
import { Products } from "./Products";

import * as fs from "node:fs/promises";


async function writeData(fileName:string, data:any){
    return fs.writeFile(fileName, JSON.stringify(data))
    

}

class Programm{
    static async  Run(){
        let products = new Products();
        await products.init()
        await writeData("result_1.json", products.findProductPrice(100,150))
        await writeData("result_2.json", products.findProductTitle("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"))
        await writeData("result_3.json", products.findProductDescription ("Your"))

        products.sortProducts()
        await writeData("result_4.json", products.Products)

        await writeData("result_7.json", products.filterByImageFormat (["png", "jpeg"] ))

        products.shortDescription()
        await writeData("result_8.json", products.Products)

        await writeData("result_5.json", products.filterByRate(3.9))

        products.discountForCategory(30,"men's clothing")
        await writeData("result_9.json", products.Products)

        products.roundPrice()
        await writeData("result_10.json", products.Products)

        await writeData("result_11.json", products.OverallCount())

        await writeData("result_6.json", Object.fromEntries(products.groupByCategory()))
    


        // console.log(products.findProductTitle("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"))
        // console.log(products.findProductDescription ("Your"))
        
//         products.sortProducts()
//         console.log(products.Products)

// console.log(products.findFormatImage (["111", "png", "jpeg"] ))
// console.log(products.filterByRate (3.9))
}
}


Programm.Run()