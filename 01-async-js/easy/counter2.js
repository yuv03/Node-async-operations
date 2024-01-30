
// let d = new Date();

// console.log(d.getSeconds());

// let a =0;
// while(1){
//     setTimeout(()=>{
//         console.log(a);
//         a++;
//     },1000)
// }
// let firstfn = async function(){
//     for (let i = 0; i < 100; i++ ) {
        
//         let t = await myfn(i)
//     }
// }
// setTimeout(()=>{
//     console.log(a);
//     a++;
// },1000)

// setTimeout(()=>{

// }, 1000)

// firstfn();
let a =0;
function myfn(){
    console.log(a);
    a++;
    setTimeout(myfn, 1000)
}

myfn();