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
