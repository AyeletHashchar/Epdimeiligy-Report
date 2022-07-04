function makeAllCups(words){
    let newArr = [];
    return new Promise((resolve, reject)=>{
        words?.forEach(word => {
            newArr.push(word.toUpperCase());
        });
        if(newArr.length > 0)
            resolve(newArr);
        reject("ERR: Translation failed. Possibly reason: no input")
    })
}

makeAllCups(["aaa", "ccc", "bBb"])
.then((res)=>{alert(res)})
.catch((err)=>{console.error(err)});