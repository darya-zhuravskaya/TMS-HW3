function trimString(str: string, from: number, to: number): string {
    return str.slice(from, to);
}
console.log(trimString("The weather is good today",3,11))