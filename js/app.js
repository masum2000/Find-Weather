// do not show api key on your js files.
const API_KEY = `e51aad323e822cc5ac11877d17fa7040`;
const  loadTemperature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data));

}

const displayTemperature = data => {
    // const temperature = document.getElementById('temperature');
    // console.log(data.main.temp);
    setInnerTextById('temperature', data.main.temp);
    setInnerTextById('condition',data.weather[0].main);
    console.log(data.weather[0].main);
}

const setInnerTextById = (id,text) => {
    const temperature = document.getElementById(id);
    temperature.innerText = text;
}

document.getElementById('btn-search').addEventListener('click', function(){
    const searchField = document.getElementById('search-field');
    const city = searchField.value;
    // set city
    document.getElementById('city').innerText =city;

    // load weather
    loadTemperature(city);

})

// load all temperature
loadTemperature('dhaka');