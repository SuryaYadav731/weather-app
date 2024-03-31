//http://api.weatherapi.com/v1/current.json?key=6461f660c2064e5c90075726243103&q=varanasi&aqi=no

const temperatureField = document.querySelector(".temp");
const locationField= document.querySelector(".time p");
const dataField = document.querySelector(".time span");
const conditionField = document.querySelector(".condition p");
const searchField = document.querySelector(".area");
const form = document.querySelector('form')

form.addEventListener('submit', searchForLocation)


let main = 'Gujarat'

const fetchResults = async (mainLocation) =>{
    let url = `http://api.weatherapi.com/v1/current.json?key=6461f660c2064e5c90075726243103&q=${mainLocation}&aqi=no`

    const res = await fetch(url)

    const data = await res.json()
    console.log(data)
    

    let locationName = data.location.name
    let time = data.location.localtime

    let temp = data.current.temp_c

    let condition = data.current.condition.text

    updateDetails(temp, locationName, time, condition)

}

function updateDetails( temp, locationName , time, condition){
    temperatureField.innerText = temp
    locationField.innerText = locationName
    dataField.innerText = time
    conditionField.innerText = condition

}
function searchForLocation(e){
    e.preventDefault()

    target = searchField.value
    fetchResults(target)
}





fetchResults(main)