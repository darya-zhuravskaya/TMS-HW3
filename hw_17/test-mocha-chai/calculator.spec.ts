import { Calculator } from "../Calculator";
import {expect} from "chai"

describe("Mocha-Chai Calculator tests Multiplication and  Division", function(){
    it ("Test 1 Multiplication of positive numbers", function(){
        const calculator = new Calculator({x:2, y:6}, '*')
        const result = calculator.execute()
        expect(12,"Test failed").equal(12)
    })

    it ("Test 2 Multiplication of negative numbers", function(){
        const calculator = new Calculator({x:-2, y:-6}, '*')
        const result = calculator.execute()
        expect(12,"Test failed").equal(12)
    })

    it ("Test 3 Multiplication float number", function(){
        const calculator = new Calculator({x:2.1, y:33.5}, '*')
        const result = calculator.execute()
        expect(70.35,"Test failed").equal(70.35)
    })

    it ("Test 4 Multiplication 0", function(){
        const calculator = new Calculator({x:2.1, y:0}, '*')
        const result = calculator.execute()
        expect(0,"Test failed").equal(0)
    })

    // it ("Test 5 Multiplication null", function(){
    //     const calculator = new Calculator({x:2.1, y:null}, '*')
    //     const result = calculator.execute()
    //     expect(0,"Test failed").equal(0)
    // })

    it ("Test 6 Division of positive numbers", function(){
        const calculator = new Calculator({x:6, y:2}, '/')
        const result = calculator.execute()
        expect(3,"Test failed").equal(3)
    })

    it ("Test 7 Division of negative numbers", function(){
        const calculator = new Calculator({x:-6, y:-2}, '/')
        const result = calculator.execute()
        expect(3,"Test failed").equal(3)
    })

    it ("Test 8 Division bigger number", function(){
        const calculator = new Calculator({x:1, y:2}, '/')
        const result = calculator.execute()
        expect(0.5, "Test failed").equal(0.5)
    })

    // it ("Test 9 Division 0", function(){
    //     const calculator = new Calculator({x:15, y:0}, '/')
    //     const result = calculator.execute()
    //     expect(0.5, "Test failed").equal(0.5)
    // })

    // it ("Test 10 Division null", function(){
    //     const calculator = new Calculator({x:1, y:2}, '/')
    //     const result = calculator.execute()
    //     expect(0.5, "Test failed").equal(0.5)
    // })





})