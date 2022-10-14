URL = 'https://cors-anywhere.herokuapp.com/restcountries.com/v3.1/subregion'

document.getElementById('region').addEventListener('change', getInfo);


function getInfo() {
    region = document.getElementById('region').value;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            data = JSON.parse(xhttp.responseText);
            document.getElementById('output').innerHTML = 
            `<h2>Country</h2> <h2>Capital</h2> <h2>Population</h2> <h2>Flag</h2>`;
            for (i = 0; i < data.length; i++) {
                document.getElementById('output').innerHTML += 
                `<p>${data[i].name.common}</p> <p>${data[i].capital}</p> <p>${data[i].population}</p> <img src="${data[i].flags.png}">`;
            }
        }
    };
    xhttp.open("GET", `${URL}/${region}`, true);
    xhttp.send();
}