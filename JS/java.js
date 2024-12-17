

function updateinput(x){
    let screenEle = document.getElementById('screen');
    let currentval = screenEle.value;
    let updatedval= currentval+x;
    screenEle.value = updatedval;
}


function arithmetic() {
    let screenEle = document.getElementById('screen');
    let screenValue = screenEle.value;

    // Check for both addition and subtraction
    let hasAddition = screenValue.includes('+');
    let hasSubtraction = screenValue.includes('-');
    let hasMultiplication = screenValue.includes('*');
    let hasDivision = screenValue.includes('/');

    if (hasAddition && hasSubtraction){
        // Handle both operations
        console.log('404');
    } else if (hasAddition) {
        screenValue = screenEle.value.split('+');
        currentval = parseInt(screenValue[0]);
        for (i = 1; i < screenValue.length; i++) {
            currentval += parseInt(screenValue[i]);
        }
        screenEle.value = currentval;
    } else if (hasSubtraction){
        screenValue = screenEle.value.split('-');
        currentval = parseInt(screenValue[0]);
        for (i = 1; i < screenValue.length; i++) {
            currentval -= parseInt(screenValue[i]);
        }
        screenEle.value = currentval;
    } else if (hasMultiplication) {
        screenValue = screenEle.value.split('*');
        currentval = parseInt(screenValue[0]);
        for (i = 1; i < screenValue.length; i++) {
            currentval *= parseInt(screenValue[i]);
        }
        screenEle.value = currentval;
    }else if (hasDivision) {
        screenValue = screenEle.value.split('/');
        currentval = parseInt(screenValue[0]);
        for (i = 1; i < screenValue.length; i++) {
            currentval /= parseInt(screenValue[i]);
        }
        screenEle.value = currentval;
    }else{
        console.log(`null`)
    }
};

function cleardatas(){
    let screenEle = document.getElementById('screen');
    let screenval = screenEle.value;
    let updatedval = screenval.substr(0, screenval.length-1);
    screenEle.value = updatedval;
};

function cleardata(){
    let screenEle = document.getElementById('screen');
    screenEle.value = ''; 
};










let screen = document.getElementById('screen')
let moon = document.getElementById('moon')
let xEle = document.getElementById('bi-x')
let listEle = document.getElementById('bi-list')
listEle.addEventListener('click', ()=>{
    listEle.style.transform = 'rotate(90deg)'
    listEle.style.visibility = 'hidden'
    xEle.style.visibility = 'visible'
    document.getElementById('side-bar').style.padding = '30px'
    document.getElementById('side-bar').style.width = '70%'
})
xEle.addEventListener('click', ()=>{
    xEle.style.transform = 'rotate(-90deg)'
    xEle.style.visibility = 'hidden' 
    listEle.style.transform = 'rotate(180deg)'
    listEle.style.visibility = 'visible' 
    document.getElementById('side-bar').style.padding = '0px'
    document.getElementById('side-bar').style.width = '0%'
})
moon.addEventListener('click', ()=>{
    moon.style.color = 'red'
    screen.style.background = 'black'
    screen.style.color = 'white'
})

moon.addEventListener('dblclick', ()=>{
    document.getElementById('able').style.background = 'url(/Images/bookstore.jpg)';

})








    // function addition(){
    //     let number = '512232';
    //     currentnumber =  parseInt((number[0]))
    //     let result;
    //     for(i=1; i < number.length; i++){
    //         currentnumber += parseInt((number [i]))
    //         result = currentnumber
    //     }
    //     console.log(result)
    // }
    // addition()
