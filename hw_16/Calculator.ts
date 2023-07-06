type Numbers = {
    x: number,
    y: number
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

    addition(): number{
        return this.numbers.x + this.numbers.y
    }

    subtraction(): number{
        return this.numbers.x - this.numbers.y
    }

    multiplication(): number{
        return this.numbers.x * this.numbers.y
    }

    division(): number{
        return this.numbers.x / this.numbers.y
    }

}