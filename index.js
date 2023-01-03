const result = document.querySelector('#result');
const btn = document.querySelectorAll('.btn');
const getResultBtn = document.getElementById('getResultBtn')

for (item of btn) {
  item.addEventListener('click', (e) => {
    btntext = e.target.innerText;
    result.innerText += btntext;
  });
}

getResultBtn.addEventListener('click', e=>{
  if ((result.innerText).length>6) {
  result.innerText=((eval(result.innerText)).toExponential(2))
  }else{
  result.innerText=eval(result.innerText)
  }
})