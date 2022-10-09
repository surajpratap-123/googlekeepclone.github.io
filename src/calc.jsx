




function Add(a,b){
    let sum = a+b;
    return sum;
}
function Sub(a,b){
    let sub = a-b;
    return sub;
}
function Multi(a,b){
    let multi =  a*b;
    return multi;
}
function Div(a,b){
    let div = a/b;
    div=div.toFixed(2);                                             // =====>>>used for showing of two digt only afte point........
    return div;
}
  

export default Add;
export {Sub, Multi, Div};