var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0;

function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if(currentNumber < 0){
        document.getElementById("currentNumber").style.color = 'red'
    }
    if(currentNumber == 0){
        document.getElementById("currentNumber").style.color = 'black'
    }
    if(currentNumber > 0){
        document.getElementById("currentNumber").style.color = 'green'
    }
}

function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if(currentNumber < 0){
        document.getElementById("currentNumber").style.color = 'red'
    }
    if(currentNumber == 0){
        document.getElementById("currentNumber").style.color = 'black'
    }
    if(currentNumber > 0){
        document.getElementById("currentNumber").style.color = 'green'
    }
}


