
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


