const listForm = [];
function handleList(formList) {
    let itensList = document.querySelectorAll(`${formList} .list li`)

    let itemLi = Array.from(itensList).map(item => item.textContent)
    localStorage.setItem(`Key_${formList}`, JSON.stringify(itemLi))
};

function handleJson(keyList, listUl) {
    const listJson = JSON.parse(localStorage.getItem(`Key_${keyList}`))
    const areaUl = document.querySelector(`${listUl} ul`)
    if (listJson) {
        areaUl.innerHTML = '';
        listJson.filter((texto) => {
            if (texto !== '') {
                const newLi = document.createElement('li')
                newLi.textContent = texto
                areaUl.appendChild(newLi)
            }
        })
    }
};
handleJson('.formationSchool', '.formationSchool');
handleJson('.schoolContent', '.schoolContent');
handleJson('.experience', '.experience');
handleJson('.progress', '.progress');

buttons.forEach((item) => {
    item.addEventListener('click', (event) => {
        handleList('.formationSchool');
        handleList('.schoolContent');
        handleList('.experience');
        handleList('.progress');
    })
})

function handleInputs() {
    if (inputs[0].value.trim() === '' || inputs[14].value.trim() === '' || inputs[15].value.trim() === '') return
    document.querySelector('.modal').style.display = 'inline-block'
    document.querySelectorAll('.modal').forEach((item) => {
        const spans = item.querySelectorAll('span')
        const areaSpans = item.querySelectorAll('.areaSpans')
        spans[0].innerHTML = inputs[0].value
        spans[1].innerHTML = 'e-mail: ' + inputs[14].value
        spans[2].innerHTML = 'Telefone: ' + inputs[15].value
        areaSpans[0].innerHTML = textAreas[0].value
        areaSpans[5].innerHTML = textAreas[2].value
        areaSpans[2].innerHTML = lists[0].innerHTML
        areaSpans[1].innerHTML = lists[1].innerHTML
        areaSpans[3].innerHTML = lists[2].innerHTML
        areaSpans[4].innerHTML = lists[3].innerHTML
    })
}
function imprimir() {
    const divContent = document.querySelector('.areaPrint').innerHTML
    const originalContent = document.body.innerHTML

    document.body.innerHTML = divContent
    window.print()

    document.body.innerHTML = originalContent
}