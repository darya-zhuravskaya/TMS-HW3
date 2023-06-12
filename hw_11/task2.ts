function getTodos(){
    return fetch('https://jsonplaceholder.typicode.com/todos').then((response)=> response.json())
}

type Todo = {
    id: number,
    title: string
}

function convertTodo(object: any): Todo {
    return {
        id: object.id,
        title: object.title
    }
}

function printTodos(todos: any[]): Todo[] {
    return todos.map(convertTodo)
}

getTodos()
    .then(printTodos)
    .then((todos) => console.log(todos))
