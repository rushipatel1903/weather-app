const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const currentWeatherItemsEl = document.getElementById('current-weather-item');
const timezone = document.getElementById('time-zone');
const countryEl = document.getElementById('country');
const weatherforecastEl = document.getElementById('weather-forecast');
const currentTempEl = document.getElementById('current-temp');


 let loc = document.getElementById("location");
 let tempicon = document.getElementById("temp-icon");
 let tempvalue = document.getElementById("temp-value");
 let climate = document.getElementById("climate");
 let iconfile;
 const searchInput = document.getElementById("search-input");
 const searchButton = document.getElementById("search-button");

searchButton.addEventListener('click', (e)=>{
    e.preventDefault();
    getWeather(searchInput.value);
    searchInput.value='';
});

const getWeather=async (city)=> {




    try{
        const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=f99c46cdead6cdd6aa68f794bd06625c`)

        const weatherData= await response.json();
        console.log(weatherData);
        const{name}=weatherData;
        const{temp}=weatherData.main;
        const{id,main}=weatherData.weather[0];

        loc.textContent=name;
        climate.textContent=main;
        tempvalue.textContent=temp;

        if(id<300 && id>200){
            tempicon.src="./image/thunderstorm.png"
        }

       else  if(id<400 && id>300){
            tempicon.src="./image/clouds.png"
        }


        else if(id<600 && id>500){
            tempicon.src="./image/rain.png"
        }

        else if(id<700 && id>600){
            tempicon.src="./image/snow.png"
        }

       else if(id<800 && id>700){
            tempicon.src="./image/clouds.png"
        }

        else if(id==800){
            tempicon.src="./image/sun.png"
        }
    }

    catch(error){
        alert('city not found');
    }
};

    










const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

const API_KEY = 'f99c46cdead6cdd6aa68f794bd06625c';

setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hoursIn12Hrformat = hour >= 13 ? hour %12: hour
    const minutes = time.getMinutes();
    const ampm = hour >=12 ? 'pm' : 'Am'

    timeEl.innerHTML = hoursIn12Hrformat + ':' + minutes + ' ' + `<span id="am-pm">${ampm}</span>`

    dateEl.innerHTML = days[day] + ' ,' + date+ ' ' + months[month]
}, 1000);



window.addEventListener("load" ,()=>{
      let long;
      let lat;

      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
            long=position.coords.longitude;
            lat=position.coords.latitude;
        

            const api= `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=f99c46cdead6cdd6aa68f794bd06625c`

            fetch(api).then((Response)=>{
                return Response.json();
            })

            .then(data=>{
                const{name}=data;
                const{temp}=data.main;
                const{id,main}=data.weather[0];

                loc.textContent=name;
                climate.textContent=main;
                tempvalue.textContent=(temp);
                if(id<300 && id>200){
                    tempicon.src="./image/thunderstorm.png"
                }

               else  if(id<400 && id>300){
                    tempicon.src="./image/clouds.png"
                }


                else if(id<600 && id>500){
                    tempicon.src="./image/rain.png"
                }

                else if(id<700 && id>600){
                    tempicon.src="./image/snow.png"
                }

               else if(id<800 && id>700){
                    tempicon.src="./image/clouds.png"
                }

                else if(id==800){
                    tempicon.src="./image/sun.png"
                }


                console.log(data);
            })
        })
      }
})
      

  