var n1 = "0";
var operator = null;
var n1 = "";
var n2 = "";

function includeDigit(digit) {
    if(n2 && operator && clickedOnEqual){
        clickedOnEqual = false;
            cleanner();
        n1 = digit;
            resultOnDisplay(n1);
    return
    }

    if(operator !== null) {
        n2 = n2 + digit;
            resultOnDisplay(n2);
    }else {
        if (n1 === 0) {
            n1 = digit;
        }else {
            n1 += digit;
        }
            resultOnDisplay(n1);
    }
}
var clickedOnEqual = false;
    function finishCalculation(){
        clickedOnEqual = true;
        var result = calculate();
        n1 = result;
            resultOnDisplay(n1)
}

    function percent() {
        if(!n2) {
            cleanner();
            resultOnDisplay(n1);
        }else {
            var _percent = (n1 * n2) / 100;
            n2 = _percent;
            resultOnDisplay(n2);
    }
   
}

    function calculate() {
        var numberCalculated = 0;
        var _n1 = parseFloat(n1);
        var _n2 = parseFloat(n2)
            switch (operator){
            case '+':
                numberCalculated = _n1 + _n2;
            break
            case '-':
                numberCalculated = _n1 - _n2;
            break
            case '*':
                 numberCalculated = _n1 * _n2;
            break
            case '/':
                numberCalculated = _n1 / _n2;
            break
    }
        return numberCalculated;
}  
    
    function includePoint() {
        if(operator && n2 === ""){
            n2 = "0.";
        }else if(operator && n2) {
            n2 = n2 + ".";
        }else {
            n1 = n1 + ".";
    }
}

    function cleanner() {
        n1 = "0";
        operator = null;
        n2 = "";
        resultOnDisplay(n1);
}

    function resultOnDisplay(value){
        document.querySelector('#display').innerHTML = value
}

    function startCalculation(symbol) {
        if(clickedOnEqual) {
            clickedOnEqual = false;
            n2 = "";
    }

        if(operator === null || n2 === "") {
        operator = symbol;
        }else {
            var result = calculate();
            n1 = result;
            operator = symbol;
            n2 = "";
            resultOnDisplay(n1);
    }
        operator = symbol;
} 
