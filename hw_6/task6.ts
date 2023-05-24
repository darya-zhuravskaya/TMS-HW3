
type Access = {
    login: string,
    password: string
}

const correct: Access = {
    login: "darya",
    password:"qw1234"
}

function login(login: string, password: string): Access {
    const data: Access = {
        login: login,
        password: password
    }
    return data
}

function validator (correct: Access, userData: Access): void {

    if (correct.login === userData.login && correct.password === userData.password){
        console.log ("Добро пожаловать")
    } else {
        console.log ("Неверные логин или пароль")
    }
}

let userData1 = login (correct.login, "qer");
validator (correct, userData1)

let userData2 = login ("da", correct.password);
validator (correct, userData2)

let userData3 = login (correct.login, correct.password);
validator (correct, userData3)