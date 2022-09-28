function myclick() {
    alert('Clicked!')
    let elem = document.getElementById('myelm')
    let elem2 = document.querySelector('#myelm')
    elem.style.backgroundColor = 'green'
    elem2.style.color = 'red'
    elem2.classList.add('mystyle')
}

function addStyle() {
    let elem2 = document.querySelector('#myelm2')
    elem2.classList.add('mystyle')
}

function removeStyle() {
    let elem2 = document.querySelector('#myelm2')
    elem2.classList.remove('mystyle')
}

let i = 0;
function changeStyle() {
    let elem2 = document.querySelector('#myelm2')
    i % 2 == 0 ? elem2.classList.add('mystyle') : elem2.classList.remove('mystyle')
    i++;
}

document.querySelector("#get").addEventListener("click", (e) => {
    alert('Salam!')
    console.log(document.forms['frm']['nname'].value)
    console.log(document.getElementsByTagName('input')[1].value)
    console.log(document.getElementById('password').value)
    console.log(document.getElementById('teams').value)
    console.log(document.querySelector('input[name="gender"]:checked').value)
})



