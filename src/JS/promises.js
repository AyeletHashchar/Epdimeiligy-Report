function makeAllCups(words){
    let newArr = [];
    return new Promise((resolve, reject)=>{
        words?.forEach(word => {
            newArr.push(word.toUpperCase());
        });
        if(newArr.length > 0){
            sortWords(newArr)
            .then((res)=>{resolve(res)})
            .catch((err)=>{reject(err)});
        }
        else reject("ERR: Translation failed. Possibly reason: no input")
    })
}

function sortWords(words){
    let newArr = words;
    return new Promise((resolve, reject)=>{
        if(newArr.includes(1)){
            reject("ERR: Unvalid Input. " + word + " is not a string.")
        }
        newArr.sort();
        resolve(newArr);
    })
}

makeAllCups(["aaa", "ccc", "bBb"])
.then((resolve)=>{alert(resolve)})
.catch((err)=>{console.error(err)});