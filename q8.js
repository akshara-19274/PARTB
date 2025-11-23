let nums = [10, 3, 7, 20, 13, 2];
let s=nums.map(num=>num*num);
console.log(s);
function isprime(num){
    if (n<2) return false;
    for (let i=2;i<=Math.sqrt(num);i++){
        if (num%i===0) return false;
    }
    return true;
}
let f=nums.filter(isprime);
console.log(f);
let su=nums.reduce((acc,curr)=>acc+curr,0);
console.log(su);
let d=[...nums].sort((a,b)=>b-a);
console.log(d);