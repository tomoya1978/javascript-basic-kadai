// output-btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');
 
// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
    console.log('クリックされました！');

let text = document.getElementById('text').innerText;
document.getElementById('text').innerText = 'ボタンをクリックしました';

});


console.log(document.getElementById('text'));
