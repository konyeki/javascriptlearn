var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";


{
    //Block scope
    var blockVar = "I'm a block-scoped var"; 
    let blockLet = "I'm a block-scoped let";
    const blockConst = "I'm a block-scoped const";
}

function show(){
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";

}

//Global scope
//console.log(globalVar);
//console.log(globalLet);
//console.log(globalConst);

//function
show();
console.log(functionVar); //Reference error as it cannot be accessed outside the function
console.log(functionLet);//Reference error 
console.log(functionConst);//Reference error

//Block scope
//console.log(blockVar);
//console.log(blockLet);
//console.log(blockConst);