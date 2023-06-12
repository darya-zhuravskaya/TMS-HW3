import fetch from "node-fetch"

function getInfo(ids: number[]) {
    for (let id of ids){
        let url = `https://jsonplaceholder.typicode.com/posts/${id}`
        fetch(url).then((response)=> response.json())
        .then((data)=> {
            if(JSON.stringify(data) == "{}"){
                console.log("No data")
            }
            else {
                console.log(data)
            }
        })

    }
}

getInfo([15, 23, 7, 3]);


async function getInfo2(ids: number[]){
    for (let id of ids){
        let url = `https://jsonplaceholder.typicode.com/posts/${id}`
        let response = await fetch(url);
        let data = await response.json()
        if(JSON.stringify(data) == "{}"){
            console.log("No data")
        }
        else {
          console.log(data)
         }
    }
 }
getInfo2([15, 23, 7, 3])

