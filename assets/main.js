const inputEl = document.querySelector('.inputEl')
const buttonEl = document.querySelector('.btnEl')
const listsEl = document.querySelector('.lists')

buttonEl.onclick = function (){

    if(inputEl.value.length === 0){
        return
    }

    listsEl.insertAdjacentHTML('beforeend', `
    <li class="list">
                    <p>${inputEl.value}</p>
                    <div class="actions"> 
                    <button class="done">Выполнить</button>
                    <button class="remove">Удалить</button>
                </div>
                   
                </li>
    `)

    inputEl.value =''

    event.preventDefault()
}