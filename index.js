let city = 'New York';
console.log(city);

const formEl = document.getElementById('cityForm');

function getCity() {
    formEl.addEventListener('submit', (e) => {
        e.preventDefault();
        let city = document.getElementById('city').value;
        console.log(city);
        return city;
    })
}
getCity();







module.exports = city;