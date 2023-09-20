// calculator
let inp = document.querySelector('input');
let btn = document.querySelectorAll('button');
for (let buttons of btn) {
    buttons.addEventListener('click', function (e) {
        let btnText = e.target.innerText;
        if (btnText === 'AC') {
            inp.value = "";
        }
        else if (btnText === '=') {
            try {
                inp.value = eval(inp.value);
            }
            catch {
                inp.value = "Error";
            }
        }
        else {
            inp.value += btnText;
        }
    })
}
