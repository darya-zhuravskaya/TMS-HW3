import { Calculator } from "../Calculator";
// a tut co importirovat

describe("Jest Calculator tests", function(){
    test("Test 1 Addition of positive numbers", function(){
        const calculator = new Calculator({x:2, y:6}, '+')
        const result = calculator.execute()
        expect(result).toBe(12)
    })

    test("Test 2 Addition of float numbers", function(){
        const calculator = new Calculator({x:98.35, y:1.66}, '+')
        const result = calculator.execute()
        expect(result).toBe(100.01)
    })

    // test("Test 3 Addition null", function(){
    //     const calculator = new Calculator({x:98.35, y:1.66}, '+')
    //     const result = calculator.execute()
    //     expect(result).toBe(100.01)
    // })





})