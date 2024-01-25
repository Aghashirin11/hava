const btn = document.querySelector('.btnsrc')
const error = document.querySelector('.not-found')
const not = document.querySelector('.not')
const app = document.querySelector('.app')
const weatherBox  = document.querySelector('.weather-box');
const weatherDetails  = document.querySelector('.weather-details');

const country = document.getElementById('search');
function Data(){
    const APIkey = '06a2f9757d140674b85df2280064ce9f'
    
    if (country=='')
        return ;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country.value}&units=metric&appid=${APIkey}`)
    .then(response=>response.json())
    .then(json =>{
       if (json.cod==='404'){
        app.style.height ='400px'
        error.style.display ='block'
        weatherBox.style.display = 'none'
        weatherDetails.style.display = 'none'
        return;         
       }
       
       error.style.display ='none'
       
    const image = document.querySelector('.weather-box img');
    const temperature = document.querySelector('.temperature');
    const description = document.querySelector('.description');
    const humidity = document.querySelector('.weather-details .humidity span')
    const wind = document.querySelector('.weather-details .wind span')

    switch(json.weather[0].main){
        case 'Clear':
            image.src = 'clear.png'
            break;
        case 'Clouds':
            image.src = 'cloud.png'
            break;
        case 'Rain':
            image.src = 'rain.png'
            break;
         case 'Snow':
            image.src = 'snow.png'
            break;
         case 'Mist':
            image.src = 'mist.png'
            break;
         default:
            image.src = ''
          
    }
    
    temperature.innerHTML =`${parseInt(json.main.temp) } &#8451`;
    description.innerHTML = `${json.weather[0].description}`
    humidity.innerHTML = `${json.main.humidity} %`
    wind.innerHTML = `${parseInt(json.wind.speed)} Km/h`

    weatherBox.style.display = '';
    weatherDetails.style.display = '';
app.style.height = '540px';






    })
}

btn.addEventListener('click', Data);
country.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
        Data();
    }
});
