type Numbers = {
    x: number | null,
    y: number | null
}

export class Calculator {
    numbers:Numbers;
    operation: string

    constructor(numbers: Numbers, operation: string){
        this.numbers = numbers;
        this.operation = operation.trim()
    }

    execute() {
        switch (this.operation) {
            case '+':
                return this.addition();
            case '-':
                return this.subtraction();
            case '*':
                return this.multiplication();
            case '/':
                return this.division()
        }

    }

    addition(): number | undefined {
        if (this.numbers.x === null || this.numbers.y === null){
            return undefined 
        }
        return this.numbers.x + this.numbers.y
    }

    subtraction(): number | undefined {
        if (this.numbers.x === null || this.numbers.y === null){
            return undefined 
        }

        return this.numbers.x - this.numbers.y
    }

    multiplication(): number | undefined {
        if (this.numbers.x === null || this.numbers.y === null){
            return undefined 
        }

        return this.numbers.x * this.numbers.y
    }

    division(): number | undefined {
        if (this.numbers.x === null || this.numbers.y === null){
            return undefined 
        }
        
        return this.numbers.x / this.numbers.y
    }

}