

let key = "aee1045382f4e2a05a39735d89481e80"

let box = document.getElementById("box")

async function search(){


    let city = document.getElementById("city").value

    let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`)
    let data = await result.json()
    console.log(data)
    appendData(data)
}

function appendData(data){


    box.innerHTML = " "

    let name =document.createElement('p')
    name.innerText = `City Name- ${data.name}`

    let temp = document.createElement('p')
    temp.innerText = `  Tempreature- ${data.main.temp}`

    let humidity =document.createElement('p')
    humidity.innerText = ` Humidity-  ${data.main.humidity}`
       
    let pressure = document.createElement('p')
    pressure.innerText = `Pressure  ${data.main.pressure}`

    box.append(name,temp,humidity,pressure)
 }