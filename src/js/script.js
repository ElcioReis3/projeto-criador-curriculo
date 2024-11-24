const buttons = document.querySelectorAll('button');
const formationSchool = document.querySelectorAll('.formationSchool');
const formation = document.querySelectorAll('.formation');
const experience = document.querySelectorAll('.experience');
const progress = document.querySelectorAll('.progress');
const inputs = document.querySelectorAll('input');
const textAreas = document.querySelectorAll('textarea');
const lists = document.querySelectorAll('.list');
const btnsClear = document.querySelectorAll('.clearBtn');


function closeModal() {
    document.querySelector('.modal').style.display = 'none'
    document.querySelector('.formDisplay').classList.remove('hidden')

}

buttons.forEach((item) => {
    item.addEventListener('click', (event) => {
        event.preventDefault()
    })
})

function handleForEach(element) {
    element.forEach((item) => {
        const button = item.querySelector('.buttonAdd')
        const inputs = item.querySelectorAll('input')
        const area = item.querySelector('ul')

        button.addEventListener('click', (event) => {
            if (inputs[0].value !== '' && inputs[1].value !== '' && inputs[2].value !== '') {
                area.innerHTML += `<li class="ml-4 p-2 list-disc">${inputs[0].value} - ${inputs[1].value} / ${inputs[2].value}</li>`
            }
            inputs.forEach(input => input.value = '')

        })

    })
}
handleForEach(formation)
handleForEach(formationSchool)


function handleForEachs(element) {
    element.forEach((item) => {
        const button = item.querySelector('.buttonAdd');
        const inputs = item.querySelectorAll('input');
        const textArea = item.querySelector('#areaText');
        const area = item.querySelector('ul');

        button.addEventListener('click', (event) => {

            if (textArea) {
                if (inputs[0].value !== '' || inputs[1].value !== '' || inputs[2].value !== '') {
                    area.innerHTML += `<li class="ml-4 p-2 list-disc">${inputs[0].value}- ${textArea.value} / ${inputs[1].value} até ${inputs[2].value}</li>`;
                }
            } else if (inputs[0].value !== '' && inputs[1].value !== '' && inputs[2].value !== '') {
                area.innerHTML += `<li class="ml-4 p-2 list-disc">${inputs[0].value} - ${inputs[1].value} - ${inputs[2].value} / ${inputs[3].value}</li>`;
            }
            inputs.forEach(input => input.value = '')
            if (textArea) textArea.value = ''
        })

    })
}
handleForEachs(experience)
handleForEachs(progress)

