import {Calculator} from "./Calculator"

class CalculatorTests {
    static testAdditionOfPositiveNumbers() {
        const calculator = new Calculator({x:2, y:6}, '+')

        const result = calculator.execute()

        if (result === 8){
            console.log("Test passed")
        } else {
            console.log("Test failed")
        }
    }

    static testAdditionOfNegativeNumbers() {
        const calculator = new Calculator({x:-2, y:-6}, '+')

        const result = calculator.execute()

        if (result === -8){
            console.log("Test passed")
        } else {
            console.log("Test failed")
        }
    }

    static testSubtractionOfPositiveNumbers() {
        const calculator = new Calculator({x:2, y:6}, '-')

        const result = calculator.execute()

        if (result === -4){
            console.log("Test passed")
        } else {
            console.log("Test failed")
        }
    }

    static testSubstractionOfNegativeNumbers() {
        const calculator = new Calculator({x:-2, y:-6}, '-')

        const result = calculator.execute()

        if (result === 4){
            console.log("Test passed")
        } else {
            console.log("Test failed")
        }
    }

    static testMultiplicationOfPositiveNumbers() {
        const calculator = new Calculator({x:2, y:6}, '*')

        const result = calculator.execute()

        if (result === 12){
            console.log("Test passed")
        } else {
            console.log("Test failed")
        }
    }

    static testMultiplicationOfNegativeNumbers() {
        const calculator = new Calculator({x:-2, y:-6}, '*')

        const result = calculator.execute()

        if (result === 12){
            console.log("Test passed")
        } else {
            console.log("Test failed")
        }
    }

    static testDivisionOfPositiveNumbers() {
        const calculator = new Calculator({x:6, y:2}, '/')

        const result = calculator.execute()

        if (result === 3){
            console.log("Test passed")
        } else {
            console.log("Test failed")
        }
    }

    static testDivisionByBiggerNumber() {
        const calculator = new Calculator({x:1, y:2}, '/')

        const result = calculator.execute()

        if (result === 0.5){
            console.log("Test passed")
        } else {
            console.log("Test failed")
        }
    }

    // Negative scenario 
    static testUnsupportedOperation(){
        const calculator = new Calculator({x:1, y:2}, '>')

        const result = calculator.execute()

        if (result === undefined){
            console.log("Test passed")
        } else {
            console.log("Test failed")
        }

    }

    static testAdditionWithSpace() {
        const calculator = new Calculator({x:6, y:2}, '    +    ')

        const result = calculator.execute()

        if (result === 8){
            console.log("Test passed")
        } else {
            console.log("Test failed")
        }
    }
}

CalculatorTests.testAdditionOfPositiveNumbers()
CalculatorTests.testAdditionOfNegativeNumbers()
CalculatorTests.testSubtractionOfPositiveNumbers()
CalculatorTests.testSubstractionOfNegativeNumbers()
CalculatorTests.testMultiplicationOfPositiveNumbers()
CalculatorTests.testMultiplicationOfNegativeNumbers()
CalculatorTests.testDivisionOfPositiveNumbers()
CalculatorTests.testDivisionByBiggerNumber()
CalculatorTests.testUnsupportedOperation()
CalculatorTests.testAdditionWithSpace()




