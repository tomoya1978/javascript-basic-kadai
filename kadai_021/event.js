const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click', () => {
console.log('クリックされました！');

 setTimeout(() => {
let text = document.getElementById('text').innerText;
document.getElementById('text').innerText = 'ボタンをクリックしました';
 }, 2000);


});