function add(a,b){
    let c=a+b;
    return c;
}

let sub=(a,b) => {
    let c=a-b;
    return c;
}

let addRes=add(7,8)
let subRes=sub(7,8)
let mulRes=mul(21,6)
alert(`Add 7+8=${addRes}
        Sub 21-8=${subRes}`)
        
        
        const mul=()=>{
            let a=prompt("Enter A")
            let b=prompt("Enter B")
            let c=parseInt(a)* parseInt(b)
            return c
        }
       