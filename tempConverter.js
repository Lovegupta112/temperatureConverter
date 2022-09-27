
const caculateTemp=()=>{

let temp=document.getElementById('temp');
// console.log(temp.value)
let tempValue=temp.value;


let selectedElm=document.getElementById('tempDiff');
// console.log(selectedValue.value);
//or
let tempOption=selectedElm.options[selectedElm.selectedIndex].value;
console.log(tempOption);

const celToFah=(cel)=>{
    
    let fahrenheit=Math.round((cel*9/5)+32);
    return fahrenheit;
}

const fahToCel=(fah)=>{
    let celsius=Math.round((fah-32)*5/9);
    return celsius;
}


let result;
if(tempOption=='cel'){
result=celToFah(tempValue);
document.getElementById('result').innerHTML=`= ${result} °Fahrenheit`;
}
else{
    result=fahToCel(tempValue);
document.getElementById('result').innerHTML=`= ${result} °Celsius`;
}
}