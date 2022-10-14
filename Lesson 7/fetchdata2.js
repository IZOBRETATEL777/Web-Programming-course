document.getElementById('but1').addEventListener("click", getText);
document.getElementById('but2').addEventListener("click", getJson);
document.getElementById('but3').addEventListener("click", getApi);

const divCont = document.getElementById('container');


function getText() {
    fetch('data.txt')
    .then(res => {
        return res.text();
    })
    .then(data => {
        console.log(data);
        divCont.innerHTML = `<p>${data}</p>`
    })
    .catch((err) => {
        console.log(err);
    })
}

function getJson() {
    fetch('customer.json')
    .then(res => {
        return res.json();
    })
    .then(customer => {
        console.log(customer);
        const output = `
        <ul>
            <li>ID: ${customer.id}</li>
            <li>name: ${customer.name}</li>
            <li>company: ${customer.company}</li>
            <li>phone: ${customer.phone}</li>

        </ul>
        `;
        divCont.innerHTML = output
    })
    .catch((err) => {
        console.log(err);
    })
}

function getApi() {
    fetch('https://api.chucknorris.io/jokes/random')
    .then(data => {
        return data.json();
    })
    .then(joke => {
        console.log(joke)
        divCont.innerHTML = `<p>${joke.value}</p>`
    })
}