document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById('calc-display');
    const button = document.getElementsByClassName('btn');

    let currentValue = "";
    function evaluateResult(){
        console.log('currentValue', currentValue);
        const convertedValue = currentValue
        .replace('x','*')
        .replace('÷','/')
        .replace('%','*0.01');
        console.log('currentValue', convertedValue);
        const result = eval(convertedValue);
        currentValue= result.toString();
        display.value = currentValue;
    }
    for (let i = 0; i < button.length; i++) {
        const buttons = button[i];
        buttons.addEventListener('click', function () {
            // console.log('button clicked:', buttons.innerText);
            const value = buttons.innerText;

            if (value == "AC"){
                currentValue="";
                display.value=currentValue;
            }
            else if(value == "="){
                evaluateResult();
            }
            else{
            currentValue += value;
            console.log('currentValue: ',currentValue);
            display.value = currentValue;
            }

        });
    }
});