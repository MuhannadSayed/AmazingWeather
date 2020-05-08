var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name')
var desc = document.querySelector('.desc')
var temp = document.querySelector('.temp')
var country = document.querySelector('.country')
var wind = document.querySelector('.wind')
var feels = document.querySelector('.feels')
var humidity = document.querySelector('.humidity')
var icon = document.querySelector('.icon')
var pressure = document.querySelector('.pressure')
var time = document.querySelector('.timezone')



button.addEventListener('click' , function (){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=d247b0b9ab02ce4eb4cc242cb54da4df&units=metric')
    .then(response => response.json())
    .then(data => {
        var nameValue = data['name']
        var tempValue = data['main']['temp']
        var feelsLike = data['main']['feels_like']
        var descValue = data['weather'][0]['description']
        var countryValue = data['sys']['country']
        var windValue = data['wind']['speed']
        var humidityValue = data['main']['humidity']
        var iconValue = data['weather'][0]['icon']
        console.log(data)
        var pressureValue = data['main']['pressure']
        var timeValue = data['timezone']



        name.innerHTML = nameValue
        temp.innerHTML = "Temprature value is : " +tempValue
        feels.innerHTML = "Temp feels like : "+feelsLike
        desc.innerHTML = "Weather descrition is : "+descValue
        country.innerHTML = "Country code is :"+countryValue
        wind.innerHTML = "Wind speed is : "+windValue
        humidity.innerHTML = "Humidity value is :" + humidityValue
        icon.src = "http://openweathermap.org/img/w/" + iconValue + ".png"
        pressure.innerHTML = "Pressure value is :" +pressureValue
        time.innerHTML = "Timezone"+timeValue



    })

    .catch(err => alert("Wrong city name"))

})

