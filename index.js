const result = document.querySelector('#result');
const btn = document.querySelectorAll('.btn');
const getResultBtn = document.getElementById('getResultBtn')

for (item of btn) {
  item.addEventListener('click', (e) => {
    btntext = e.target.innerText;
    result.value += btntext;
  });
}

getResultBtn.addEventListener('click', e=>{
  result.value=eval(result.value)
})