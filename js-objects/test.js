const btn = document.querySelector('.btn');
const input = document.getElementById('txtInput');
const output = document.getElementById('spnOutput');


input.addEventListener('keyup', (e) => {
    output.textContent = input.value;
});