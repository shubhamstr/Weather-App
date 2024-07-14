const submitBtn = document.getElementById("submitBtn")
const cityName = document.getElementById("cityName")
const city = document.getElementById("city")

const temp = document.getElementById("temp")
const statusP = document.getElementById("status")
const list = document.getElementById("list")
const data_hide = document.getElementsByClassName("data_hide")

const getInfo = async (e) => {
  e.preventDefault()
  // alert("hi");
  let cityVal = cityName.value
  if (cityVal == "") {
    city.innerText = "Please Write the name before search"
  } else {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=53e026615dee8ba0f9291a3216e2c095`
    const res = await fetch(url)
    const data = await res.json()
    if (Object.keys(data).length > 0) {
      const arr = [data]
      console.log(data)
      const wather = arr[0].weather[0].main
      const desc = arr[0].weather[0].description
      const windSpeed = arr[0].wind.speed
      const humidity = arr[0].main.humidity
      const header = `${arr[0].name},${arr[0].sys.country}`

      city.innerText = header
      temp.innerHTML = arr[0].main.temp + "<sup>0</sup>C"

      const tempstatus = arr[0].weather[0].main
      if (tempstatus == "Sunny") {
        statusP.innerHTML =
          '   <i class="fas fa-sun" style="color:#eccc68"></i>'
      } else if (tempstatus == "Clouds") {
        statusP.innerHTML =
          '   <i class="fas fa-cloud" style="color:#f1f2f6"></i>'
      } else if (tempstatus == "Rainy") {
        statusP.innerHTML =
          '   <i class="fas fa-cloud-rain" style="color:#a4b0be"></i>'
      }
      list.innerHTML = `
                <li>Weather: ${wather}</li>
                <li>Description: ${desc}</li>
                <li>Wind Speed: ${windSpeed}</li>
                <li>Humidity: ${humidity}</li>
                `
      //   city.innerText = "Please Write the city name properly"
    }
  }
}
submitBtn.addEventListener("click", getInfo)
