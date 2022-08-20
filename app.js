let enviarCiudad = document.getElementById("enviarCiudad");
let imprimirCiudad = document.getElementById("imprimirCiudad");
let ciudad = document.getElementById("ciudad");
let temperatura = document.getElementById("temperatura");
let humedad = document.getElementById("humedad");
let viento = document.getElementById("viento");
let ciudades = [];

//Logica del formulario
enviarCiudad.addEventListener("submit", function (event) {
    event.preventDefault();
    guardarCiudad(recibirCiudad.value)
    mostrarCiudad();
    peticion();
});


//Funcion para guardar varias ciudades
function guardarCiudad (ciudad) {
    ciudades.push({
        ciudad
    })
    console.log(ciudades)
}

//Funcion para mostrar ciudad
function mostrarCiudad () {
    imprimirCiudad.innerHTML = ""
    ciudades.forEach(function (objeto) {
    imprimirCiudad.innerHTML += `
    <div class="container">

    <div id="caja1">
        <h1 id="temperaturaValor"></h1>
        <h1 id="temperaturaDescripcion"></h1>
    </div>
    <div id="caja2">
        <h2 id="ubicacion"></h2>
        <img id="iconoAnimado" src="" alt="" height="128" width="128">
   </div>
   <div id="caja3">
    <h3>Veloc. del Viento</h3>
    <h1 id="vientoVelocidad"></h1>
   </div>
</div>
    `
    })
}

//Peticion para buscar coordenadas de ciudad
const peticion = async () => {
    const respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${recibirCiudad.value}&lang=es&units=metric&appid=ee322eedc415019029f1daab175edc7e`)
    console.log(respuesta.data)
    let temp = Math.round(respuesta.data.main.temp)
    temperaturaValor.textContent = `${temp} °C`

    let desc = respuesta.data.weather[0].description
    temperaturaDescripcion.textContent = desc.toUpperCase()

    ubicacion.textContent = respuesta.data.name

    vientoVelocidad.textContent = `${respuesta.data.wind.speed} m/s`

    console.log(respuesta.data.weather[0].main)
    switch (respuesta.data.weather[0].main) {
        case 'Thunderstorm':
          iconoAnimado.src='animated/thunder.svg'
          console.log('TORMENTA');
          break;
        case 'Drizzle':
          iconoAnimado.src='animated/rainy-2.svg'
          console.log('LLOVIZNA');
          break;
        case 'Rain':
          iconoAnimado.src='animated/rainy-7.svg'
          console.log('LLUVIA');
          break;
        case 'Snow':
          iconoAnimado.src='animated/snowy-6.svg'
            console.log('NIEVE');
          break;                        
        case 'Clear':
            iconoAnimado.src='animated/day.svg'
            console.log('LIMPIO');
          break;
        case 'Atmosphere':
          iconoAnimado.src='animated/weather.svg'
            console.log('ATMOSFERA');
            break;  
        case 'Clouds':
            iconoAnimado.src='animated/cloudy-day-1.svg'
            console.log('NUBES');
            break;  
      }
}
