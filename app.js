    let temperaturaValor = document.getElementById('temperaturaValor')
    let temperaturaDescripcion = document.getElementById('temperaturaDescripcion')
    let ubicacion = document.getElementById('ubicacion')
    let iconoAnimado = document.getElementById('iconoAnimado')
    let vientoVelocidad = document.getElementById ('vientoVelocidad')

const url =`https://api.openweathermap.org/data/2.5/weather?q=madrid&lang=es&units=metric&appid=ee322eedc415019029f1daab175edc7e`

fetch(url)
.then (response => {return response.json()})
.then ( data =>{
let temp = Math.round(data.main.temp)
temperaturaValor.textContent = `${temp} °C`

let desc = data.weather[0].description
temperaturaDescripcion.textContent = desc.toUpperCase()

ubicacion.textContent = data.name

vientoVelocidad.textContent = `${data.wind.speed} m/s`

console.log(data.weather[0].main)
switch (data.weather[0].main){
        case 'Clear':
iconoAnimado.src = 'animated/day.svg'
        break;
        case 'Clouds' :
iconoAnimado.src = 'animated/cloudy-day-1.svg'
        break;}
})

.catch(error => {
console.log(error)
})

    
