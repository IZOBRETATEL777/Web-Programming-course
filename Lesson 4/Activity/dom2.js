function calculate() {
    let prices = [
    {
        city: 'Berlin',
        price: 120
    },

    {
        city: 'Baku',
        price: 800
    },

    {
        city: 'London',
        price: 300
    },
    ]
    
    let price = prices.filter((e) => e.city == document.getElementById('direction').value)[0].price

    let count = document.getElementById('count').value;
    let age = document.getElementById('age').value;

    let overall = price * count;
    let discount = 0;
    
    if (age < 7) {
        discount = price;
    }
    else if (age > 2 && age < 7) {
        discount = price / 2;
    }
    overall -= discount;

    if (document.getElementById('round').checked) {
        overall *= 1.5;
        
    }


    alert(`Overall: $${overall} (discount - $${discount})`)
}