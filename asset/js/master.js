
const inp = document.querySelector('.input')
const img = inp.querySelector('img')
const btn = document.querySelector('.btn')




btn.addEventListener('click', () => {
    if (inp.value != '') {
        const cityName = inp.value;
        console.log(cityName);
        inp.value = ''
        inp.blur()
        getTemp(cityName)
    }

})




inp.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
        const cityName = inp.value;
        console.log(cityName);
        inp.value = ''
        inp.blur()
        getTemp(cityName)
    }
})





let cityName = inp.value

getTemp()

async function getTemp(cityName) {
    let x = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=f29ecf68c834337513d22cd96106dc05`)
    let data = await x.json()
    // console.log(data);
    document.getElementById('temp').innerHTML = 'Weather in ' + data.name + ' , ' + data.sys.country
    ////////safeh1//////////////
    document.getElementById('s1').style.display = 'none'
    ///////safeh1//////////////
    document.getElementById('mydegree').innerHTML = (data.main.temp - 273.15).toFixed(1) + '°C'
    document.getElementById('img').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    document.getElementById('myhumidity').innerHTML = `<i class="bi bi-droplet"></i>` + ' ' + 'humidity: ' + data.main.humidity + '%'
    document.getElementById('myspeed').innerHTML = `<i class="bi bi-wind"></i>` + ' ' + 'wind: ' + data.wind.speed + 'Km/h'
    document.getElementById('mymain').innerHTML = data.weather[0].main
    document.getElementById('mydescription').innerHTML = 'Visibility: ' + (data.visibility / 1000).toFixed(1) + 'Km'

    changeBackground(data.main.temp);
}

function changeBackground(temperature) {
    console.log("Temperature: ", temperature);
    if (temperature < 273.15) {
        document.body.style.backgroundImage = "url('/asset/img/barf.gif')";
    } else if (temperature < 280.15) {
        document.body.style.backgroundImage = "url('/asset/img/baron.gif')";
    } else if (temperature < 290.15) {
        document.body.style.backgroundImage = "url('/asset/img/paeez.gif')";
    } else if (temperature < 300.15) {
        document.body.style.backgroundImage = "url('/asset/img/garma.gif')"
    } else if (temperature < 303.15) {
        document.body.style.backgroundImage = "url('/asset/img/b8788042e1d6a0474de76591d7e527b5.gif')"; 
    } else {
        document.body.style.backgroundImage = "url('asset/img/download (1).gif')"; 
    }
}