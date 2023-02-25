const cancelEl = document.querySelector('#cancel')

const equalEl = document.querySelector('#equal')

const inputEl = document.getElementById("input-value")

const btnEl = document.querySelectorAll('.btn-count')


const deleteEl = document.querySelector('#delete')


btnEl.forEach(item =>{
    item.addEventListener('click',(e) => {
        let sum  = inputEl.value+e.target.innerHTML
        inputEl.value = sum;
            
    })
})

cancelEl.addEventListener('click',() => {
    inputEl.value = '';
})


equalEl.addEventListener('click',() => { 
    let calculate = eval(inputEl.value)
    inputEl.value = calculate;
    
})









