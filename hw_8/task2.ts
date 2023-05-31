const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];
console.log(users.map((name:string, index: number): string => `member ${index} : ${name}`))