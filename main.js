const shuffle = (arr) => {
    let new_arr = []
    while (arr.length !== 0){
        let i = Math.floor(Math.random()*arr.length)
        new_arr.push(arr[i])
        arr.splice(i,1)
    }
    return(new_arr)
    }
    
    console.log(shuffle([1,2,3,4,5,6,7,8,9]))