const buttons = document.querySelectorAll('button');
const formationSchool = document.querySelectorAll('.formationSchool');
const formation = document.querySelectorAll('.schoolContent');
const experience = document.querySelectorAll('.experience');
const progress = document.querySelectorAll('.progress');
const inputs = document.querySelectorAll('input');
const textAreas = document.querySelectorAll('textarea')

function handleInputs() {

    document.querySelector('section').innerHTML =
        `${inputs[0].value}<br>
        ${inputs[14].value}<br>
        ${inputs[15].value}<br>
        ${textAreas[0].value}<br>
        ${textAreas[2].value}<br>`

}

buttons.forEach((item) => {
    item.addEventListener('click', (event) => {
        event.preventDefault()
    })
})

formationSchool.forEach((item) => {
    const button = item.querySelector('button');
    const inputs = item.querySelectorAll('input');
    const area = item.querySelector('ul');

    button.addEventListener('click', (event) => {
        if (inputs[0].value !== '' && inputs[1].value !== '' && inputs[2].value !== '') {
            area.innerHTML += `<li class="ml-7 p-2 list-disc">${inputs[0].value} - ${inputs[1].value} / ${inputs[2].value}</li>`
        }
        inputs[0].value = ''
        inputs[1].value = ''
        inputs[2].value = ''
    })
})
formation.forEach((item) => {
    const button = item.querySelector('button');
    const inputs = item.querySelectorAll('input');
    const area = item.querySelector('ul');

    button.addEventListener('click', (event) => {
        if (inputs[0].value !== '' && inputs[1].value !== '' && inputs[2].value !== '') {
            area.innerHTML += `<li class="ml-7 p-2 list-disc">${inputs[0].value} - ${inputs[1].value} / ${inputs[2].value}</li>`
        }
        inputs[0].value = ''
        inputs[1].value = ''
        inputs[2].value = ''
    })
})
experience.forEach((item) => {
    const button = item.querySelector('button');
    const inputs = item.querySelectorAll('input');
    const textArea = item.querySelector('#areaText');
    const area = item.querySelector('ul');


    button.addEventListener('click', (event) => {
        if (inputs[0].value !== '' && inputs[1].value !== '' && inputs[2].value !== '') {
            area.innerHTML += `<li class="ml-7 p-2 list-disc">${inputs[0].value}- ${textArea.value} / ${inputs[1].value} até ${inputs[2].value}</li>`;
        }
        inputs[0].value = ''
        inputs[1].value = ''
        inputs[2].value = ''
        textArea.value = ''
    })
})
progress.forEach((item) => {
    const button = item.querySelector('button');
    const inputs = item.querySelectorAll('input');
    const area = item.querySelector('ul');


    button.addEventListener('click', (event) => {
        if (inputs[0].value !== '' && inputs[1].value !== '' && inputs[2].value !== '') {
            area.innerHTML += `<li class="ml-7 p-2 list-disc">${inputs[0].value} - ${inputs[1].value} - ${inputs[2].value} / ${inputs[3].value}</li>`;
        }
        inputs[0].value = ''
        inputs[1].value = ''
        inputs[2].value = ''
        inputs[3].value = ''
    })
})


