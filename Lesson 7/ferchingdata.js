// XHR method
function loadData() {
    const xhr = new XMLHttpRequest();

    // xhr.open('GET', 'data.txt', true);
    // xhr.open('GET', 'customer.json', true);
    xhr.open('GET', 'customers.json', true);
    

    xhr.onprogress = function() {
        console.log('ReadyState:', xhr.readyState);
    }

    xhr.onload = function(){
        if (this.status === 200) {
            console.log(this.responseText);
            const customers = JSON.parse(this.responseText);
            customers.forEach((customer) => {
                const output = `
                <ul>
                    <li>ID: ${customer.id}</li>
                    <li>name: ${customer.name}</li>
                    <li>company: ${customer.company}</li>
                    <li>phone: ${customer.phone}</li>
    
                </ul>
                `;
                document.querySelector('div').innerHTML += output;
            });
           
        }
    }

    xhr.send();
    
}

function loadJoke() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.chucknorris.io/jokes/random', true);
    xhr.onprogress = function() {
        console.log('ReadyState:', xhr.readyState);
    }

    xhr.onload = function(){
        if (this.status === 200) {
            joke = JSON.parse(this.responseText)
            document.querySelector('div').innerHTML += joke.value + '<br><br>';
        }
    }

    xhr.send();

}

document.getElementById('button').addEventListener('click', loadData);
document.getElementById('joke').addEventListener('click', loadJoke);

