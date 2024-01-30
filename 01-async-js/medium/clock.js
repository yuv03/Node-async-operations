
// const d = new Date();

// console.log(d.getHours())
// console.log(d.getMinutes());
// console.log(d.getSeconds());


setInterval(()=>{
    const d = new Date();
    console.log(d.toLocaleTimeString());
    console.log(d.toLocaleTimeString(undefined, {hour12: false}));
    console.log(d.getHours(), ' : ', d.getMinutes(), ' : ', d.getSeconds());
}, 1000)