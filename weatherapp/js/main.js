
const apiUrl = '//api.openweathermap.org/data/2.5/weather?id=5816861&appid=880bcb631f870f8a5bd11ec2bd58f4d1&units=imperial';

const d = new Date();

const todayDayNumber = d.getDay();

let forecastDayNumber = todayDayNumber;

const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


fetch (apiUrl)
.then((response) => {
    console.log(response)
    response.json()
})
.then((info) => {
    console.log(info);

    let cityName = document.createElement('h1');
    cityName.textContent = `Weather for ${info.city.name}, ${info.city.country}.`;
    document.getElementById('location').appendChild(cityName);

    for (i=0; i< info.list.length; i++) {
        let time = info.list[i].dt_txt;
        if(time.includes('06:00:00')) {
            forecastDayNumber +=1;
            if (forecastDayNumber === 7) {
                forecastDayNumber = 0;
            }

            let dayName = document.createElement('div');
            dayName.className = "dayOfWeek";
            dayName.textContent = weekday[forecastDayNumber];

            let dayInfo = document.createElement('div');
            dayInfo.className = 'dayInfo';

            let temp = document.createElement('p');
            temp.textContent = info.list[i].main.temp + `\xB0`;

      
            const iconcode = info.weather[0].icon;
            const icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
            const theIcon = document.createElement('img');
            theIcon.src = icon_path;

            let theDay = document.createElement('div');
            theDay.className = 'theDay';
            document.getElementById('forecast').appendChild(theDay)
            theDay.appendChild(dayName);
            theDay.appendChild(dayInfo);
            theDay.appendChild(temp);
            theDay.appendChild(theIcon);

        }
    }
});