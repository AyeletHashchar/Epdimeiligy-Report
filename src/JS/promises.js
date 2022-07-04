function getRandom(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(Math.floor(Math.random() * 10) + 1);
        },3000)
    })

}

getRandom()
.then(result => alert("getRandom: " + result))
.catch((err)=>{console.error(err)});