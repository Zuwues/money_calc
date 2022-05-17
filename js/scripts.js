let zp1 = document.querySelector('#vol');
let zp2 = document.querySelector('#vol1');
let zp3 = document.querySelector('#vol2');
let trat1 = document.querySelector('#vol3');
let trat2 = document.querySelector('#vol4');
let trat3 = document.querySelector('#vol5');
let inputZP = document.querySelector('#out3');
let inputTrat = document.querySelector('#out2');
let inputResult = document.querySelector('#out1');
let polzunok = document.querySelector('#polz');
let finalResult = document.querySelector('.result');


zp1.addEventListener('input', function () {
    inputZP.value = Number(zp1.value) + Number(zp2.value) + Number(zp3.value);
    inputResult.value = Number(inputZP.value) - Number(inputTrat.value);
})
zp2.addEventListener('input', function () {
    inputZP.value = Number(zp1.value) + Number(zp2.value) + Number(zp3.value);
    inputResult.value = Number(inputZP.value) - Number(inputTrat.value);
})
zp3.addEventListener('input', function () {
    inputZP.value = Number(zp1.value) + Number(zp2.value) + Number(zp3.value);
    inputResult.value = Number(inputZP.value) - Number(inputTrat.value);
})

trat1.addEventListener('input', function () {
    inputTrat.value = Number(trat1.value) + Number(trat2.value) + Number(trat3.value);
    inputResult.value = Number(inputZP.value) - Number(inputTrat.value);
})
trat2.addEventListener('input', function () {
    inputTrat.value = Number(trat1.value) + Number(trat2.value) + Number(trat3.value);
    inputResult.value = Number(inputZP.value) - Number(inputTrat.value);
})
trat3.addEventListener('input', function () {
    inputTrat.value = Number(trat1.value) + Number(trat2.value) + Number(trat3.value);
    inputResult.value = Number(inputZP.value) - Number(inputTrat.value);
})

polzunok.addEventListener('input', function () {
    let result = Number(inputResult.value) / 100 * Number(polzunok.value);
    finalResult.innerHTML = Number(Math.floor(result));

})

