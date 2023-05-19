
function foo (name: string = "foo"): void {
    console.log(name)
}

function boo (name: string = "boo"): void {
    console.log(name)
}

function fooboo (boolean:boolean, foo: Function, boo: Function): void {
    if (boolean) {
        foo();
    }
    else {
        boo()
    }
} 
fooboo(true, foo, boo)

